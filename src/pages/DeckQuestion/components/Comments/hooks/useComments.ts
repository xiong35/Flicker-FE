import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelf } from "../../../../../context/Self/useSelf";
import { CardID } from "../../../../../models/card";
import { Comment, CommentID } from "../../../../../models/comment";
import { DeckID } from "../../../../../models/deck";
import { getCommentsReq } from "../../../../../network/card/getComments";

export function useComments(cardID: CardID, deckID: DeckID) {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    if (!isUp) return;

    const setDown = () => setIsUp(false);
    document.addEventListener("click", setDown, { once: true });
    return () => document.removeEventListener("click", setDown);
  }, [isUp]);

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!isUp) return;
    if (comments.length > 0) return;

    getCommentsReq({
      cardID,
      deckID,
    }).then((newComments) => {
      if (!newComments || newComments.length === 0) return;

      setComments(newComments);
    });
  }, [isUp, comments]);

  const { self } = useSelf();
  function addSelfComment(content: string, id: CommentID) {
    setComments([
      {
        comment: content,
        id,
        owner: self,
        lastupdate: (Date.now() / 1000).toString(),
        liked: false,
        likes: 0,
      },
      ...comments,
    ]);
  }

  return { isUp, setIsUp, comments, addSelfComment };
}
