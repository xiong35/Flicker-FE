import "./index.scss";

import Loading from "../../../../components/Loading";
import ArrowLeftCircle from "../../../../imgComponents/ArrowLeftCircle";
import { CompProps } from "../../hooks/useQuestionComp";
import { useCardState } from "./hooks/useCardState";

const ANIMATION_TIME = 150;

function FlipCard(props: CompProps) {
  const { cards, switchCard } = props;
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
        <ArrowLeftCircle
          className="dq-flip_card-actions-icon"
          onClick={() => switchCard("backward")}
        />
        <div className="dq-flip_card-actions-process">{`2/10`}</div>
        <ArrowLeftCircle
          className="dq-flip_card-actions-icon rotate"
          onClick={() => switchCard("forward")}
        />
      </div>
    </div>
  );
}

export default FlipCard;
