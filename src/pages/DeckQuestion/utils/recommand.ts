/* 生成推荐题目的逻辑 */

import { CardID } from "../../../models/card";
import { Deck, DeckID } from "../../../models/deck";
import { getCards } from "../../../network/card/getCards";
import { getRecordByDeckIDFromLocal } from "../../../utils/studyRecords/syncRecord";

export async function getNextNQuestion(deck: Deck, count = 10) {
  let idsToFetch: DeckID[] = [];
  const recordMap = getRecordByDeckIDFromLocal(deck.id);

  function compareRecords(card1: CardID, card2: CardID) {
    const record1 = recordMap!.recordMap[card1];
    const record2 = recordMap!.recordMap[card2];
    // 优先判断是否已经学过(即有记录)
    if (!(record1 && record2)) {
      // 有人没学过, 他应该优先学
      if (!record1) return -1;
      if (!record2) return 1;
    }

    // 判断是否不会, 不会的优于会的
    if (record1.status === 1) return 1;
    if (record2.status === 1) return -1;

    // 再判断学习时间, 上次学习时间远的优于学习时间近的
    return record1.last_study - record2.last_study;
  }

  if (!recordMap) {
    idsToFetch = getRandomOnes(deck, count);
  } else {
    let sortedIDs = deck.cards.sort(compareRecords).slice(0, count);

    if (sortedIDs.length < count) {
      sortedIDs = [
        ...sortedIDs,
        ...getRandomOnes(deck, count - sortedIDs.length),
      ];
    }

    idsToFetch = sortedIDs;
  }

  const cards = await getCards({
    ids: idsToFetch,
    deckID: deck.id,
  });

  return cards || [];
}

function getRandomOnes(deck: Deck, count: number) {
  const retArr: DeckID[] = [];

  while (count--) {
    let maxIter = 20;
    let nextQuestionID: string = "";
    while (maxIter--) {
      const randIndex = Math.floor(Math.random() * deck.cards.length);
      nextQuestionID = deck.cards[randIndex];

      if (retArr.indexOf(nextQuestionID) !== -1) break;
    }

    retArr.push(nextQuestionID);
  }

  return retArr;
}
