import { useEffect, useState } from "react";

import { Card } from "../../../../../models/card";

export function useCardState(card: Card) {
  const { answer, question } = card;
  const [questionState, setQuestionState] = useState<
    "answer" | "question" | "fading"
  >("question");

  const [text, setText] = useState(question);

  useEffect(() => {
    setQuestionState("question");
    setText(question);
  }, [card.id]);

  useEffect(() => {
    if (questionState === "question") setText(question);
    else if (questionState === "answer") setText(answer);
  }, [questionState]);

  return { questionState, text, setQuestionState };
}
