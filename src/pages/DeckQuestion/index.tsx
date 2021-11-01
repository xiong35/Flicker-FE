import "./index.scss";

import { useState } from "react";

import { useSetup } from "./hooks";
import TheTopBar from "../../components/TheTopBar";
import arrowLeft from "../../assets/img/arrow-left-p_round.svg";

type DeckQuestionProps = {};

function DeckQuestion(props: DeckQuestionProps) {
  const {} = props;
  const {} = useSetup();

  const [flipState, setFlipState] = useState<
    "initial" | "flipping" | "flipped"
  >("initial");

  return (
    <>
      <TheTopBar title="学习" />
      <div className="deck_question">
        <div
          onClick={() => {
            setFlipState("flipping");
            setTimeout(() => setFlipState("flipped"), 300);
          }}
          className={`deck_question-card ${flipState}`}
        >
          {flipState === "flipped"
            ? "answer"
            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          inventore recusandae modi repudiandae accusantium quia tenetur, quasi
          amet! Animi eius inventore itaque maiores molestiae commodi aliquid
          distinctio tempora cumque nostrum?`}
        </div>

        <div className="deck_question-actions">
          <div className="deck_question-actions-action">
            <img
              className="deck_question-actions-action-icon"
              src={arrowLeft}
            />
            上一条
          </div>
          <div className="deck_question-actions-action">
            下一条
            <img
              className="deck_question-actions-action-icon"
              style={{ transform: "rotate(180deg)" }}
              src={arrowLeft}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckQuestion;
