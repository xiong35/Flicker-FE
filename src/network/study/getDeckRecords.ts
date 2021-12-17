import { DeckID } from "../../models/deck";
import { DeckRecord } from "../../models/study";
import { recordArr2Map } from "../../utils/studyRecords/mapping";
import _request from "../_request";

export type GetDeckRecordsReqData = {
  deckID: DeckID;
};

/**
 * 获得一个卡片集的学习记录
 */
export async function getDeckRecordsReq(data: GetDeckRecordsReqData) {
  const res = await _request<DeckRecord>({
    url: `/record/${data.deckID}`,
    method: "GET",
  });
  if (!res) return null;
  return recordArr2Map(res);
}
