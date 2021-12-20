import { CardID } from "../../models/card";
import { DeckID } from "../../models/deck";
import _request from "../_request";

export type AddCommentReqData = {
  deckID: DeckID;
  cardID: CardID;
  comment: string;
};

/**
 * 添加一条评论
 * @returns 该评论的 id
 */
export async function addCommentReq(data: AddCommentReqData) {
  const { cardID, deckID, comment } = data;

  const res = await _request<string>({
    url: `/cardset/${deckID}/card/${cardID}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });

  return res;
}
