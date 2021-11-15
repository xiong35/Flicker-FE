import "./index.scss";

import { useState } from "react";

import { useSetup } from "./hooks";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";

type FadeCardProps = {};

const ans = `this is answer`;
const question = `Lorem ipsum, dolor sit amet consectetur adipisicing
 elit. Ipsum
          inventore recusandae modi repudiandae accusantium quia tenetur, quasi
          amet! Animi eius inventore itaque maiores molestiae commodi aliquid
          distinctio tempora cumque nostrum?`;
const ANIMATION_TIME = 150;

function FadeCard(props: FadeCardProps) {
  const {} = props;
  const {} = useSetup();

  const [questionState, setQuestionState] = useState<
    "answer" | "question" | "fading"
  >("question");

  const [text, setText] = useState(question);
  return (
    <div className="dq-fade_card">
      <div
        onClick={() => {
          console.log("# index", "click");
          if (questionState === "fading") return;
          setQuestionState("fading");

          setTimeout(() => {
            if (questionState === "answer") {
              setText(question);
              setQuestionState("question");
            } else {
              setText(ans);
              setQuestionState("answer");
            }
          }, ANIMATION_TIME);
        }}
        className={`dq-fade_card-card ${questionState}`}
      >
        <div className="dq-fade_card-card-scroll">{text}</div>
      </div>
      <div className="dq-fade_card-actions">
        <div className="dq-fade_card-actions-action">
          <ArrowLeftCircle className="dq-fade_card-actions-action-icon" />
          上一条
        </div>
        <div className="dq-fade_card-actions-action">
          下一条
          <ArrowLeftCircle className="dq-fade_card-actions-action-icon rotate" />
        </div>
      </div>
    </div>
  );
}

export default FadeCard;
