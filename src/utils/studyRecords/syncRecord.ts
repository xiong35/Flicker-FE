import { CardID } from "../../models/card";
import { Deck, DeckID } from "../../models/deck";
import { CardRecord, DeckRecord } from "../../models/study";
import { _isDeckRecord } from "./check";

const RECORD_PREFIX = "__Flicker__record";

/********************************/
/* 学习过的卡组 id 数组相关操作 */
/********************************/

/** 保存 id 到本地存储, 会进行去重 */
function saveDeckIDs(deckID: DeckID[]) {
  localStorage.setItem(
    `${RECORD_PREFIX}-deck_ids`,
    JSON.stringify(Array.from(new Set(deckID)))
  );
}

/** 将新的 id 加入本地存储 */
function addCardID(newID: DeckID) {
  const oldIDs = getAllID();
  saveDeckIDs([newID, ...oldIDs]);
}

/** 获得本地存过的所有 id */
function getAllID() {
  const idsStr = localStorage.getItem(`${RECORD_PREFIX}-deck_ids`);
  if (!idsStr) return [];

  let ids: DeckID[] = [];
  try {
    ids = JSON.parse(idsStr) as DeckID[];
  } catch {}
  return ids;
}

/****************/
/* 卡组相关操作 */
/****************/

/** 根据传入卡组 id 获得其学习记录, 如果不能得到合法的记录会返回 null 且清除之 */
export function getRecordByDeckID(id: DeckID) {
  const recordStr = localStorage.getItem(`${RECORD_PREFIX}-deck-${id}`);

  if (!recordStr) return null;

  try {
    const record = JSON.parse(recordStr) as DeckRecord;
    if (!_isDeckRecord(record)) throw "not a valid record";

    return record;
  } catch {
    localStorage.removeItem(`${RECORD_PREFIX}-deck-${id}`);
    return null;
  }
}

/** 获得所有卡组的学习记录 */
export function getAllDeckRecords() {
  const ids = getAllID();

  const returnArr: DeckRecord[] = [];

  for (let id of ids) {
    const record = getRecordByDeckID(id);

    if (record) returnArr.push(record);
  }

  return returnArr;
}

/** 记录学习一个卡片的结果. 会更新 local storage 中的记录, 若是新的卡组会创建此记录 */
export function saveStudyRecord(
  deck: Deck,
  cardID: CardID,
  status: CardRecord["s"]
) {
  // 先将卡组记录下
  addCardID(deck.id);

  const oldDeckRecord = getRecordByDeckID(deck.id);
  const curCardRecord: CardRecord = {
    d: new Date().toLocaleDateString(),
    s: status,
  };

  if (!oldDeckRecord) {
    const record: DeckRecord = {
      id: deck.id,
      name: deck.name,
      rec: {
        [cardID]: [curCardRecord],
      },
      tot: deck.cards.length,
      l_s_t: Date.now(),
    };

    localStorage.setItem(
      `${RECORD_PREFIX}-deck-${deck.id}`,
      JSON.stringify(record)
    );
  } else {
    oldDeckRecord.rec = {
      ...oldDeckRecord.rec,
      [cardID]: [curCardRecord, ...(oldDeckRecord.rec[cardID] || [])],
    };

    oldDeckRecord.l_s_t = Date.now();

    localStorage.setItem(
      `${RECORD_PREFIX}-deck-${deck.id}`,
      JSON.stringify(oldDeckRecord)
    );
  }
}
