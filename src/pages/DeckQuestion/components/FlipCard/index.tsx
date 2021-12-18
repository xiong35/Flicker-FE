import "./index.scss";

import Loading from "../../../../components/Loading";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";
import { StudyStatus } from "../../../../models/study";
import { CompProps } from "../../hooks/useQuestionComp";
import Comments from "../Comments";
import { useCardState } from "./hooks/useCardState";

const ANIMATION_TIME = 150;

function FlipCard(props: CompProps) {
  const { card, switchCard, addStudyRecord } = props;

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
        <div
          className="dq-flip_card-card-scroll"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
      <div className="dq-flip_card-actions">
        <ArrowLeftCircle
          className="dq-flip_card-actions-icon"
          onClick={() => {
            addStudyRecord(StudyStatus.LEARNING);
            switchCard("backward");
          }}
        />

        <div className="dq-flip_card-actions-pass">
          <span
            onClick={() => {
              addStudyRecord(StudyStatus.LEARNT);
              switchCard("forward");
            }}
            className="dq-flip_card-actions-pass-text"
          >
            &nbsp;PASS&nbsp;
          </span>
        </div>

        <ArrowLeftCircle
          className="dq-flip_card-actions-icon rotate"
          onClick={() => {
            addStudyRecord(StudyStatus.LEARNING);
            switchCard("forward");
          }}
        />
      </div>

      <Comments id={card.id}></Comments>
    </div>
  );
}

export default FlipCard;
