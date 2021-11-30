import _request from "../_request";
import { DeckID } from "../../models/deck";
import { CardID } from "../../models/card";

export type AddCommentReqData = {
  deckID: DeckID;
  cardID: CardID;
  comment: string;
};

/**
 * 添加一条评论
 * @returns 是否成功
 */
export async function addCommentReq(data: AddCommentReqData) {
  const { cardID, deckID, comment } = data;

  const res = await _request({
    url: `/cardset/${deckID}/card/${cardID}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });

  return res !== null;
}
