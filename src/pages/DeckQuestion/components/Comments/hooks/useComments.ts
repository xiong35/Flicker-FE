import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCommentsReq } from "../../../../../network/card/getComments";
import { DeckID } from "../../../../../models/deck";
import { Comment } from "../../../../../models/comment";
import { CardID } from "../../../../../models/card";
import { useSelf } from "../../../../../context/Self/useSelf";

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
  function addSelfComment(content: string) {
    setComments([
      {
        comment: content,
        id: Date.now().toString(),
        owner: self,
        lastupdate: (Date.now() / 1000).toString(),
      },
      ...comments,
    ]);
  }

  return { isUp, setIsUp, comments, addSelfComment };
}
