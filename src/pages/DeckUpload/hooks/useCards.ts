import { useEffect, useState } from "react";

import { Card, CardID } from "../../../models/card";
import { createCardReq } from "../../../network/cardset/createCard";
import { showToast } from "../../../utils/showToast";

const initialCards = Array.from({ length: 5 }, () => new Card());

export const CARDS_KEY = "flicker-cards";

export const useCards = () => {
  const [cards, _setCards] = useState<Card[]>(initialCards);
  const [cardPostProgress, setCardPostProgress] = useState(0);
  const [showCardPostProgress, setShowCardPostProgress] = useState(false);

  const setCards = (cards: Card[]) => {
    syncToLocalStorage(cards);
    _setCards(cards);
  };

  /**
   *
   * @param card 需要新加 的card
   * @param posteriorCardID cardID，可选，若有则在该card前插入，若无则在最后插入
   */
  const addCard = (card: Card, posteriorCardID?: CardID) => {
    if (!posteriorCardID) {
      setCards([...cards, card]);
      return;
    }
    const index = cards.findIndex((card) => card.id === posteriorCardID);
    if (index === -1) return;
    const newCards = [...cards];
    newCards.splice(index, 0, card);
    setCards(newCards);
  };

  /**
   *
   * @param removeCardID cardID，将要移除的card的id
   */
  const removeCard = (removeCardID: CardID) => {
    const index = cards.findIndex((card) => card.id === removeCardID);
    if (index === -1) return;
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const updateCard = (
    cardID: CardID,
    key: Exclude<keyof Card, "id">,
    value: string
  ) => {
    const newCard = [...cards];
    const card = newCard.find((card) => card.id === cardID);
    if (!card) return;
    card[key] = value;
    setCards(newCard);
  };

  const syncToLocalStorage = (cards: Card[]) => {
    const jsonCards = JSON.stringify(cards);
    window.localStorage.setItem(CARDS_KEY, jsonCards);
  };

  const createCards = async (cardsetID: string) => {
    let postCards = cards.filter((card) => card.answer && card.question);
    setShowCardPostProgress(true);
    let progress = 0; // 发送成功的卡片个数
    for (let i = 0; i < postCards.length; i++) {
      const res = await createCardReq(
        { ...postCards[i], id: undefined },
        { cardsetID }
      );
      if (res) setCardPostProgress(++progress);
    }
    window.localStorage.removeItem(CARDS_KEY);
    setShowCardPostProgress(false);
    setCardPostProgress(0);
  };

  return {
    cards,
    setCards: _setCards,
    addCard,
    removeCard,
    updateCard,
    createCards,
    cardPostProgress,
    showCardPostProgress,
  };
};
