/********************************/
/* 学习过的卡组 id 数组相关操作 */
/********************************/

import { DeckID } from "../../models/deck";
import { RECORD_PREFIX } from "./";

/** 保存 id 到本地存储, 会进行去重 */
function _saveDeckIDs(deckID: DeckID[]) {
  localStorage.setItem(
    `${RECORD_PREFIX}-deck_ids`,
    JSON.stringify(Array.from(new Set(deckID)))
  );
}

/** 将新的 id 加入本地存储 */
export function addCardID(newID: DeckID) {
  const oldIDs = getAllID();
  _saveDeckIDs([newID, ...oldIDs]);
}

/** 获得本地存过的所有 id */
export function getAllID() {
  const idsStr = localStorage.getItem(`${RECORD_PREFIX}-deck_ids`);
  if (!idsStr) return [];

  let ids: DeckID[] = [];
  try {
    ids = JSON.parse(idsStr) as DeckID[];
  } catch {}
  return ids;
}

export function removeLocalId(id: DeckID) {
  const oldIds = getAllID();

  const idSet = new Set(oldIds);

  idSet.delete(id);

  _saveDeckIDs(Array.from(idSet));
}
