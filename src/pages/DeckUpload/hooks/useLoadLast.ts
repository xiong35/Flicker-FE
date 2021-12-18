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

  type Form = Parameters<typeof setForm>[0];

  const [showDialogLoadLast, setShowDialogLoadLast] = useState(false);

  useEffect(() => {
    const lastCards = window.localStorage.getItem(CARDS_KEY);
    const lastDeck = window.localStorage.getItem(DECK_KEY);
    let showDialog = false;
    if (lastDeck) {
      const deck = JSON.parse(lastDeck) as Form;
      delete deck.access;
      showDialog = Object.values(deck).some((value) => value);
    }
    if (!showDialog && lastCards) {
      const cards = JSON.parse(lastCards) as Card[];
      showDialog = cards.some((card) =>
        Object.values(card).some((value) => value)
      );
    }
    setShowDialogLoadLast(showDialog);
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
