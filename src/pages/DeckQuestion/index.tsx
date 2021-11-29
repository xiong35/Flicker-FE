import "./index.scss";

import { useState } from "react";

import TheTopBar from "../../components/TheTopBar";
import Comments from "./components/Comments";
import { useSetup } from "./hooks";
import { useCard } from "./hooks/useCard";
import useQuestionComp from "./hooks/useQuestionComp";

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
      <Comments />
    </>
  );
}

export default DeckQuestion;
