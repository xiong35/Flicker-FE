import { useState } from "react";

import { replyValidator, useValidator } from "../../../../../utils/validators";
import { showToast } from "../../../../../utils/showToast";
import { addCommentReq } from "../../../../../network/card/addComment";
import { DeckID } from "../../../../../models/deck";
import { CardID } from "../../../../../models/card";

export function useAddComment(
  cardID: CardID,
  deckID: DeckID,
  addSelfComment: (c: string) => void
) {
  const [comment, setComment] = useState("");

  async function addComment() {
    if (!(await useValidator(replyValidator, comment))) return;

    const success = await addCommentReq({ deckID, cardID, comment });

    if (!success) return;

    showToast("评论成功！", "success");
    addSelfComment(comment);
    setComment("");
  }

  return { setComment, comment, addComment };
}
