import { useState } from "react";

import { CardID } from "../../../../../models/card";
import { CommentID } from "../../../../../models/comment";
import { DeckID } from "../../../../../models/deck";
import { addCommentReq } from "../../../../../network/card/addComment";
import { showToast } from "../../../../../utils/showToast";
import { replyValidator, useValidator } from "../../../../../utils/validators";

export function useAddComment(
  cardID: CardID,
  deckID: DeckID,
  addSelfComment: (c: string, id: CommentID) => void
) {
  const [comment, setComment] = useState("");

  async function addComment() {
    if (!(await useValidator(replyValidator, comment))) return;

    const id = await addCommentReq({ deckID, cardID, comment });

    if (!id) return;

    showToast("评论成功！", "success");
    addSelfComment(comment, id);
    setComment("");
  }

  return { setComment, comment, addComment };
}
