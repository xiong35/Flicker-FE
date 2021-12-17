import "./index.scss";

import { useEffect, useRef } from "react";

import TheTopBar from "../../components/TheTopBar";
import { StudyStatus } from "../../models/study";
import { addStudyRecord } from "../../utils/studyRecords/syncRecord";
import { useAnimate } from "./hooks/useAnimate";
import { useCard } from "./hooks/useCard";
import useQuestionComp from "./hooks/useQuestionComp";

type DeckQuestionProps = {};

function DeckQuestion(props: DeckQuestionProps) {
  const {} = props;
  const { cardQueue, switchCard, deck } = useCard();
  const { Comp } = useQuestionComp();

  const { switchWithAnim, position } = useAnimate(switchCard, cardQueue);

  const curCardIDRef = useRef<string>();
  curCardIDRef.current = cardQueue && cardQueue[2].id;
  useEffect(() => {
    if (!curCardIDRef || !deck) return;
    return () =>
      addStudyRecord(
        {
          card_id: curCardIDRef.current || "",
          cardset_id: deck.id,
          status: 0,
        },
        true
      );
  }, [curCardIDRef, deck]);

  function addStudyRecordWithID(status: StudyStatus) {
    if (!deck || !cardQueue) return;
    addStudyRecord({ card_id: cardQueue[2].id, cardset_id: deck.id, status });
  }

  return (
    <div className="deck_question">
      <TheTopBar title="学习" />
      <div className={`deck_question-queue ${position}`}>
        {cardQueue?.map((card, i) => {
          if (!card)
            return <div className="deck_question-queue-item" key={i}></div>;
          return (
            <div className="deck_question-queue-item" key={card.id}>
              <Comp
                card={card}
                switchCard={switchWithAnim}
                addStudyRecord={addStudyRecordWithID}
              />
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
