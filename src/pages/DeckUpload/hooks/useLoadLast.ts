import { useEffect, useState } from "react";

import { Card } from "../../../models/card";
import { CARDS_KEY } from "./useCards";
import { DECK_KEY, useDeck } from "./useDeck";

type UseLoadLastProps = {
  setCards: (cards: Card[]) => void;
  setForm: ReturnType<typeof useDeck>["setForm"];
};

export const useLoadLast = (props: UseLoadLastProps) => {
  const { setCards, setForm } = props;

  const [showDialogLoadLast, setShowDialogLoadLast] = useState(false);

  useEffect(() => {
    const lastCards = window.localStorage.getItem(CARDS_KEY);
    const lastDeck = window.localStorage.getItem(DECK_KEY);
    if (lastCards || lastDeck) setShowDialogLoadLast(true);
  }, []);

  const loadLast = () => {
    const lastCards = window.localStorage.getItem(CARDS_KEY);
    const lastDeck = window.localStorage.getItem(DECK_KEY);
    lastCards && setCards(JSON.parse(lastCards));
    lastDeck && setForm(JSON.parse(lastDeck));
    setShowDialogLoadLast(false);
  };

  const cancelLoad = () => {
    window.localStorage.removeItem(CARDS_KEY);
    window.localStorage.removeItem(DECK_KEY);
    setShowDialogLoadLast(false);
  };

  return { showDialogLoadLast, cancelLoad, loadLast };
};
