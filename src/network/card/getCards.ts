import _request from "../_request";
import { pickFromArr } from "../../utils/pickFromArr";
import { DeckID } from "../../models/deck";
import { Card, CardID } from "../../models/card";
import { mockCards } from "../../mock/card";
import { wait } from "../../mock";

export type GetCardByIdReqData = {
  id: CardID[];
  deckID: DeckID;
};

/**
 * 获得某个卡片集中的的一组卡片
 * @returns 卡片集数组
 */
export async function getCards(data: GetCardByIdReqData): Promise<Card[]> {
  await wait(1000);
  return Array.from({ length: data.id.length }, () => pickFromArr(mockCards));

  const res = await _request<Card[]>({
    url: `/cardset/${data.deckID}/card`,
    method: "GET",
    params: {
      id: `[${data.id.join(",")}]`,
    },
  });
}
