import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../../models/card";
import { CardRecord } from "../../../models/study";
import { getCards } from "../../../network/card/getCards";
import { saveStudyRecord } from "../../../utils/studyRecords/syncRecord";
import { useDeck } from "../../DeckIntro/hooks/useDeck";
import { CompProps } from "./useQuestionComp";

type CardOrNone = Card | undefined;
export type CardQueue = [CardOrNone, CardOrNone, Card, CardOrNone, CardOrNone];

export function useCard() {
  /**
   * 需维护一个卡片数组, 可使切换题目时不用加载更加流畅
   * 下标为 2 的卡片即为正在看的卡片
   * 若卡片数小于 5 用 undefined 补齐
   */
  const [cardQueue, setCardQueue] = useState<CardQueue | undefined>();

  const { deckID } = useParams<{ deckID: string }>();
  const { deck } = useDeck(deckID);

  useEffect(() => {
    // return;
    if (!deck) return;

    /** 初始化的时候需要得到的问题们 */
    let idToFetch = [];
    if (deck.cards.length < 5) {
      idToFetch = deck.cards;
    } else {
      // 开头三道题和结尾两道
      idToFetch = [...deck.cards.slice(-2), ...deck.cards.slice(0, 3)];
    }

    console.log("# useCard", { idToFetch, deck });

    getCards({
      ids: idToFetch,
      deckID,
    }).then((cardsRes) => {
      if (!cardsRes) return;

      let newCards: CardQueue | undefined;
      switch (cardsRes.length) {
        case 0:
          break;
        case 1:
        case 2:
          newCards = [undefined, undefined, ...cardsRes] as CardQueue;
          break;
        case 3:
          newCards = [
            undefined,
            cardsRes[2],
            cardsRes[0],
            cardsRes[1],
            undefined,
          ];
          break;
        case 4:
          newCards = [
            undefined,
            cardsRes[3],
            ...cardsRes.slice(0, 3),
          ] as CardQueue;
          break;
        case 5:
          newCards = cardsRes as CardQueue;
      }

      setCardQueue(newCards);
    });
  }, [!!deck]);

  const switchCard: CompProps["switchCard"] = async (direction, status = 0) => {
    // return console.log("# useCard", { direction });
    if (!deck || !cardQueue) return;
    saveStudyRecord(deck, cardQueue[2].id, status);

    if (deck.cards.length <= 5) {
      /**
       * 将这种情况: [undefined, Card1, Card2, Card3, undefined]
       * 变成这样的: [undefined, Card2, Card3, Card1, undefined]
       */
      const validCards = cardQueue.filter((c) => !!c);
      const newValidCards =
        direction === "forward"
          ? [...validCards.slice(1), validCards[0]]
          : [validCards[validCards.length - 1], ...validCards.slice(0, -1)];
      const newCardQueue = cardQueue.map((c, i) => {
        if (c === undefined) {
          return undefined;
        } else {
          return newValidCards.splice(0, 1)[0];
        }
      }) as CardQueue;

      setCardQueue(newCardQueue);
    } else {
      const existingIDs = new Set(cardQueue.map((c) => c?.id));

      // 随机出一个没出现过的 ID 作为下一题
      let nextQuestionID: string = "";
      let maxIter = 20;
      while (maxIter--) {
        const randIndex = Math.floor(Math.random() * deck.cards.length);
        nextQuestionID = deck.cards[randIndex];

        if (!existingIDs.has(nextQuestionID)) break;
      }

      const cards = await getCards({
        ids: [nextQuestionID],
        deckID,
      });

      if (!cards) return;
      const newCardQueue =
        direction === "forward"
          ? [...cardQueue.slice(1, 5), ...cards]
          : [...cards, ...cardQueue.slice(0, -1)];

      setCardQueue(newCardQueue as CardQueue);
    }
  };

  return { cardQueue, switchCard, deck };
}
