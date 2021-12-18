import { DeckID } from "../../models/deck";
import _request from "../_request";

export type DelRecordOfDeckReqData = {
  deckID: DeckID;
};

/**
 * 删除一个卡片集的学习记录
 * @returns 是否成功
 */
export async function delRecordOfDeckReq(data: DelRecordOfDeckReqData) {
  const res = await _request({
    url: `/record/${data.deckID}`,
    method: "DELETE",
  });

  return res !== null;
}
