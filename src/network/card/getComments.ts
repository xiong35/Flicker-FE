import _request from "../_request";
import { DeckID } from "../../models/deck";
import { Comment } from "../../models/comment";
import { CardID } from "../../models/card";

export type GetCommentsReqData = {
  deckID: DeckID;
  cardID: CardID;
};

/**
 * 得到一个卡片的所有评论
 * @returns
 */
export async function getCommentsReq(data: GetCommentsReqData) {
  const { cardID, deckID } = data;

  const res = await _request<Comment[]>({
    url: `/cardset/${deckID}/card/${cardID}/comment`,
    method: "GET",
  });

  return res;
}
