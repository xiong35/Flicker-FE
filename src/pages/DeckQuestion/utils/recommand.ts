/* 生成推荐题目的逻辑 */

import { Deck, DeckID } from "../../../models/deck";
import { CardRecord } from "../../../models/study";
import { getCards } from "../../../network/card/getCards";
import { getRecordByDeckIDFromLocal } from "../../../utils/studyRecords/syncRecord";

export async function getNextNQuestion(deck: Deck, count = 10) {
  let idsToFetch: DeckID[] = [];
  const recordMap = getRecordByDeckIDFromLocal(deck.id);
  if (!recordMap) {
    idsToFetch = getRandomOnes(deck, count);
  } else {
    let sortedIDs = recordMap.records
      .sort(compareRecords)
      .slice(0, count)
      .map((r) => r.card_id);

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

function compareRecords(record1: CardRecord, record2: CardRecord) {
  // 先判断是否不会, 不会的优于会的
  if (record1.status === 1) return 1;
  if (record2.status === 1) return -1;

  // 再判断学习时间, 上次学习时间远的优于学习时间近的
  return record1.last_study - record2.last_study;
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
