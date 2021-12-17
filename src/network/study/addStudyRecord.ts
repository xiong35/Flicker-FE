import { CardID } from "../../models/card";
import { DeckID } from "../../models/deck";
import { CardRecord } from "../../models/study";
import _request from "../_request";

export type AddStudyRecordReqData = {
  card_id: CardID;
  cardset_id: DeckID;
  status: CardRecord["status"];
};

/**
 * 添加一条学习记录\
  当后端接收到这个请求：
  - 若这张卡是第一次学习，记录学习时间，并且学习次数为 1；
  - 若这张卡已经学过，如果上次学习时间不在当天，则学习次数加 1；更新学习时间；
 * @returns 是否成功
 */
export async function addStudyRecordReq(data: AddStudyRecordReqData) {
  const res = await _request({
    url: `/record/${data.cardset_id}/${data.card_id}`,
    method: "POST",
    data,
  });

  return res !== null;
}
