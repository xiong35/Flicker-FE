import "./index.scss";

import { useState } from "react";

import useQuestionComp from "./hooks/useQuestionComp";
import { useCard } from "./hooks/useCard";
import { useSetup } from "./hooks";
import ArrowLeftCircle from "../../imgComponents/ArrowLeftCircle";
import TheTopBar from "../../components/TheTopBar";

type DeckQuestionProps = {};

function DeckQuestion(props: DeckQuestionProps) {
  const {} = props;
  const { card } = useCard();
  const { Comp } = useQuestionComp();

  return (
    <>
      <TheTopBar title="学习" />
      <Comp card={card} />
    </>
  );
}

export default DeckQuestion;
