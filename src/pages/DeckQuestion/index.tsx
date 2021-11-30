import "./index.scss";

import { useState } from "react";

import useQuestionComp from "./hooks/useQuestionComp";
import { useCard } from "./hooks/useCard";
import { useAnimate } from "./hooks/useAnimate";
import Comments from "./components/Comments";
import TheTopBar from "../../components/TheTopBar";

type DeckQuestionProps = {};

function DeckQuestion(props: DeckQuestionProps) {
  const {} = props;
  const { cardQueue, switchCard } = useCard();
  const { Comp } = useQuestionComp();

  const { switchWithAnim, position } = useAnimate(switchCard, cardQueue);

  return (
    <div className="deck_question">
      <TheTopBar title="学习" />
      <div className={`deck_question-queue ${position}`}>
        {cardQueue?.map((card, i) => {
          if (!card)
            return <div className="deck_question-queue-item" key={i}></div>;
          return (
            <div className="deck_question-queue-item" key={card.id}>
              <Comp card={card} switchCard={switchWithAnim} />
            </div>
          );
        })}
      </div>

      <div className="deck_question-mask mask-left"></div>
      <div className="deck_question-mask mask-right"></div>
    </div>
  );
}

export default DeckQuestion;
