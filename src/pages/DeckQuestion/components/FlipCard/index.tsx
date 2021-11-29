import "./index.scss";

import { useState } from "react";

import { useCardState } from "./hooks/useCardState";
import { useSetup } from "./hooks";
import { CompProps } from "../../hooks/useQuestionComp";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";
import Loading from "../../../../components/Loading";

const ANIMATION_TIME = 150;

function FlipCard(props: CompProps) {
  const { cards, switchCard } = props;
  console.log("# index FlipCard", { cards });
  const card = cards?.[2] ?? undefined;
  if (!card) return <Loading></Loading>;

  const { questionState, setQuestionState, text } = useCardState(card);

  return (
    <div className="dq-flip_card">
      <div
        onClick={() => {
          if (questionState === "fading") return;
          setQuestionState("fading");

          setTimeout(() => {
            if (questionState === "answer") {
              setQuestionState("question");
            } else {
              setQuestionState("answer");
            }
          }, ANIMATION_TIME);
        }}
        className={`dq-flip_card-card ${questionState}`}
      >
        <div className="dq-flip_card-card-scroll">{text}</div>
      </div>
      <div className="dq-flip_card-actions">
        <div
          onClick={() => switchCard("backward")}
          className="dq-flip_card-actions-action"
        >
          <ArrowLeftCircle className="dq-flip_card-actions-action-icon" />
          上一条
        </div>
        <div
          onClick={() => switchCard("forward")}
          className="dq-flip_card-actions-action"
        >
          下一条
          <ArrowLeftCircle className="dq-flip_card-actions-action-icon rotate" />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
