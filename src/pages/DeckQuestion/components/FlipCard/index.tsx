import "./index.scss";

import { useState } from "react";

import { useSetup } from "./hooks";
import { CompProps } from "../../hooks/useQuestionComp";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";
import Loading from "../../../../components/Loading";

const ANIMATION_TIME = 150;

function FlipCard(props: CompProps) {
  const { card } = props;
  if (!card) return <Loading></Loading>;

  const { answer, question } = card;

  const [questionState, setQuestionState] = useState<
    "answer" | "question" | "fading"
  >("question");

  const [text, setText] = useState(question);
  return (
    <div className="dq-flip_card">
      <div
        onClick={() => {
          if (questionState === "fading") return;
          setQuestionState("fading");

          setTimeout(() => {
            if (questionState === "answer") {
              setText(question);
              setQuestionState("question");
            } else {
              setText(answer);
              setQuestionState("answer");
            }
          }, ANIMATION_TIME);
        }}
        className={`dq-flip_card-card ${questionState}`}
      >
        <div className="dq-flip_card-card-scroll">{text}</div>
      </div>
      <div className="dq-flip_card-actions">
        <div className="dq-flip_card-actions-action">
          <ArrowLeftCircle className="dq-flip_card-actions-action-icon" />
          上一条
        </div>
        <div className="dq-flip_card-actions-action">
          下一条
          <ArrowLeftCircle className="dq-flip_card-actions-action-icon rotate" />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
