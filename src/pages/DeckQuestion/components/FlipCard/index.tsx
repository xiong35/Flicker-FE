import "./index.scss";

import { useState } from "react";

import { useSetup } from "./hooks";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";

type FlipCardProps = {};

function FlipCard(props: FlipCardProps) {
  const {} = props;
  const {} = useSetup();

  const [flipState, setFlipState] = useState<
    "answer" | "flipping" | "question"
  >("answer");

  return (
    <div className="dq-flip_card">
      <div
        onClick={() => {
          setFlipState("flipping");
          setTimeout(() => setFlipState("question"), 300);
        }}
        className={`dq-flip_card-card ${flipState}`}
      >
        <div className="dq-flip_card-card-scroll">
          {flipState === "question"
            ? "answer"
            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          inventore recusandae modi repudiandae accusantium quia tenetur, quasi
          amet! Animi eius inventore itaque maiores molestiae commodi aliquid
          distinctio tempora cumque nostrum?`}
        </div>
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
