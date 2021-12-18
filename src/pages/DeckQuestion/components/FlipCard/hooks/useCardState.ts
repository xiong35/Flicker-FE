import { useEffect, useState } from "react";

import { Card } from "../../../../../models/card";
import { md } from "../../../../../utils/setupMdEditor";

export function useCardState(card: Card) {
  const { answer, question } = card;

  const renderedAnswer = md.render(answer);
  const rendereQuestion = md.render(question);

  const [questionState, setQuestionState] = useState<
    "answer" | "question" | "fading"
  >("question");

  const [text, setText] = useState(question);

  useEffect(() => {
    setQuestionState("question");
    setText(rendereQuestion);
  }, [card.id]);

  useEffect(() => {
    if (questionState === "question") setText(rendereQuestion);
    else if (questionState === "answer") setText(renderedAnswer);
  }, [questionState]);

  return { questionState, text, setQuestionState };
}
