import "./index.scss";

import { useState } from "react";

import useQuestionComp from "./hooks/useQuestionComp";
import { useSetup } from "./hooks";
import ArrowLeftCircle from "../../imgComponents/ArrowLeftCircle";
import TheTopBar from "../../components/TheTopBar";

type DeckQuestionProps = {};

function DeckQuestion(props: DeckQuestionProps) {
  const {} = props;
  const {} = useSetup();
  const { Comp } = useQuestionComp();

  const [flipState, setFlipState] = useState<
    "initial" | "flipping" | "flipped"
  >("initial");

  return (
    <>
      <TheTopBar title="学习" />
      <Comp />
      {/* <div className="deck_question">
        <div
          onClick={() => {
            setFlipState("flipping");
            setTimeout(() => setFlipState("flipped"), 300);
          }}
          className={`deck_question-card ${flipState}`}
        >
          <div className="deck_question-card-scroll">
            {flipState === "flipped"
              ? "answer"
              : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          inventore recusandae modi repudiandae accusantium quia tenetur, quasi
          amet! Animi eius inventore itaque maiores molestiae commodi aliquid
          distinctio tempora cumque nostrum?`}
          </div>
        </div>

        <div className="deck_question-actions">
          <div className="deck_question-actions-action">
            <ArrowLeftCircle className="deck_question-actions-action-icon" />
            上一条
          </div>
          <div className="deck_question-actions-action">
            下一条
            <ArrowLeftCircle className="deck_question-actions-action-icon rotate" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DeckQuestion;
