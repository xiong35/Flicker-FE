import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCommentsReq } from "../../../../../network/card/getComments";
import { Comment } from "../../../../../models/comment";
import { CardID } from "../../../../../models/card";

export function useComments(cardID: CardID) {
  const [isUp, setIsUp] = useState(false);

  useEffect(() => {
    if (!isUp) return;

    const setDown = () => setIsUp(false);
    document.addEventListener("click", setDown, { once: true });
    return () => document.removeEventListener("click", setDown);
  }, [isUp]);

  const [comments, setComments] = useState<Comment[]>([]);
  const { deckID } = useParams<{ deckID: string }>();

  useEffect(() => {
    if (!isUp) return;
    if (comments.length > 0) return;

    getCommentsReq({
      cardID,
      deckID,
    }).then((newComments) => {
      if (!newComments || comments.length === 0) return;

      setComments(newComments);
    });
  }, [isUp, comments]);

  return { isUp, setIsUp, comments };
}
