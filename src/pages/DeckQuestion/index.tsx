import "./index.scss";

import { useState } from "react";

import useQuestionComp from "./hooks/useQuestionComp";
import { useCard } from "./hooks/useCard";
import { useSetup } from "./hooks";
import TheTopBar from "../../components/TheTopBar";

type DeckQuestionProps = {};

function DeckQuestion(props: DeckQuestionProps) {
  const {} = props;
  const { cardQueue, switchCard } = useCard();
  const { Comp } = useQuestionComp();

  console.log("# index", { cardQueue });

  return (
    <>
      <TheTopBar title="学习" />
      <Comp cards={cardQueue} switchCard={switchCard} />
    </>
  );
}

export default DeckQuestion;
