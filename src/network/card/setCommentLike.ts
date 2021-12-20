import { CardID } from "../../models/card";
import { CommentID } from "../../models/comment";
import { DeckID } from "../../models/deck";
import _request from "../_request";

export type SetCommentLikeReqData = {
  commentID: CommentID;
  deckID: DeckID;
  cardID: CardID;
  /** 现在是否点赞, 后端对这个取反 */
  liked: boolean;
};

/**
 * 修改是否点赞一条评论
 * @returns 是否成功
 */
export async function setCommentLikeReq({
  cardID,
  commentID,
  deckID,
  liked,
}: SetCommentLikeReqData) {
  const res = await _request({
    url: `/cardset/${deckID}/card/${cardID}/comment/${commentID}/like`,
    method: "PUT",
    data: { liked },
  });

  return res !== null;
}
