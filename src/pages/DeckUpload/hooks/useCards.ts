import { useState } from "react";

import { Card, CardID } from "../../../models/card";
import { delCardReq } from "../../../network/card/delCard";
import { updateCardReq } from "../../../network/card/updateCard";
import { createCardReq } from "../../../network/cardset/createCard";
import { Scheduler } from "../../../utils/scheduler";

const initialCards = Array.from({ length: 5 }, () => new Card());

export const CARDS_KEY = "flicker-cards";

const scheduler = new Scheduler(1);

export const useCards = (id?: string) => {
  const [cards, _setCards] = useState<Card[]>(initialCards);
  const [cardPostProgress, setCardPostProgress] = useState(0);
  const [showCardPostProgress, setShowCardPostProgress] = useState(false);

  const setCards = (cards: Card[]) => {
    id || syncToLocalStorage(cards);
    _setCards(cards);
  };

  /**
   *
   * @param card 需要新加 的card
   * @param posteriorCardID cardID，可选，若有则在该card前插入，若无则在最后插入
   */
  const addCard = async (
    card: Card,
    cardsetID?: string,
    posteriorCardID?: CardID
  ) => {
    if (cardsetID && id) {
      let newCardID =
        (await createCardReq({ ...card, id: undefined }, { cardsetID })) || "";
      card.id = newCardID;
    }
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
    if (id) delCardReq({ cardID: removeCardID, cardsetID: id });
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

  const onCardsInputBlur = (cardID: string) => {
    if (!id) return;
    const card = cards.find((cardItem) => cardItem.id === cardID);
    if (!card) return;
    console.log({ card });

    scheduler.add(() => updateCardReq({ ...card }, { cardID, cardsetID: id }));
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
    onCardsInputBlur,
  };
};
