import { useHistory } from "react-router-dom";

import { Card } from "../../../models/card";
import { showToast } from "../../../utils/showToast";
import { CARDS_KEY } from "./useCards";
import { DECK_KEY } from "./useDeck";

type useCreateProps = {
  createCards: (cardsetID: string) => Promise<void>;
  createDeck: () => Promise<undefined | null | string>;
};

export const useCreate = (props: useCreateProps) => {
  const { createCards, createDeck } = props;
  const history = useHistory();

  const create = async (cards: Card[]) => {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].answer && !cards[i].question) {
        showToast(`第${i + 1}个卡片没有题目`, "error");
        return;
      }
      if (cards[i].question && !cards[i].answer) {
        showToast(`第${i + 1}个卡片没有答案`, "error");
        return;
      }
    }

    const cardsetID = await createDeck();
    if (!cardsetID) return;
    await createCards(cardsetID);
    window.localStorage.removeItem(CARDS_KEY);
    window.localStorage.removeItem(DECK_KEY);
    history.push(`/deck/${cardsetID}/intro`);
  };

  return { create };
};
