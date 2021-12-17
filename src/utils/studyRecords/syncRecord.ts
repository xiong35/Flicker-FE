import { RECORD_PREFIX } from ".";
import { DeckID } from "../../models/deck";
import { DeckRecord } from "../../models/study";
import {
  addStudyRecordReq,
  AddStudyRecordReqData,
} from "../../network/study/addStudyRecord";
import { getDeckRecordsReq } from "../../network/study/getDeckRecords";
import { Scheduler } from "../scheduler";
import { _isDeckRecord } from "./check";
import { addCardID, getAllID } from "./ids";

/****************/
/* 学习记录相关操作 */
/****************/

/** 从本地获得卡组学习记录 */
export function getRecordByDeckIDFromLocal(id: DeckID) {
  const recordStr = localStorage.getItem(`${RECORD_PREFIX}-deck-${id}`);

  try {
    const record = JSON.parse(recordStr!) as DeckRecord;
    // 2. 找到不合法的: 清除之, 进行 3
    if (!_isDeckRecord(record)) throw "not a valid record";
    // 1. 找到合法的: 返回之
    addCardID(id);
    return record;
  } catch {
    localStorage.removeItem(`${RECORD_PREFIX}-deck-${id}`);
  }

  return null;
}

function saveRecord(id: DeckID, record: DeckRecord) {
  addCardID(id);
  localStorage.setItem(`${RECORD_PREFIX}-deck-${id}`, JSON.stringify(record));
}

/** 获得所有本地卡组的学习记录 */
export function getAllLocalDeckRecords() {
  const ids = getAllID();

  const results = ids.map((id) => getRecordByDeckIDFromLocal(id));

  return results.filter((result) => result !== null) as DeckRecord[];
}

async function _addStudyRecord(data: AddStudyRecordReqData) {
  const { card_id, cardset_id, status } = data;

  const localRecord = getRecordByDeckIDFromLocal(cardset_id);

  if (localRecord) {
    // 如果本地有记录, 直接更新记录, 异步的通知后端即可
    addStudyRecordReq(data);

    let oldRecordOfCardID = localRecord.records.find(
      (record) => record.id === card_id
    );

    if (!oldRecordOfCardID) {
      const newRecordOfCardID = {
        id: card_id,
        last_study: ~~(Date.now() / 1000),
        status,
        study_times: 1,
      };
      localRecord.records = [newRecordOfCardID, ...localRecord.records];
    } else {
      oldRecordOfCardID.last_study = ~~(Date.now() / 1000);
      oldRecordOfCardID.study_times++;
      oldRecordOfCardID.status = status;
    }

    saveRecord(cardset_id, localRecord);
  } else {
    // 如果本地没有记录, 需先在后端添加记录, 请求记录, 保存到本地
    await addStudyRecordReq(data);

    const netRecord = await getDeckRecordsReq({ deckID: cardset_id });
    if (netRecord) saveRecord(cardset_id, netRecord);
  }
}

const addStudyRecordScheduler = new Scheduler(1);
/** 记录学习一个卡片的结果. 会更新 local storage 中的记录同时通知后端, 若是新的卡组会创建此记录 */
export function addStudyRecord(data: AddStudyRecordReqData) {
  addStudyRecordScheduler.add(() => _addStudyRecord(data));
}
