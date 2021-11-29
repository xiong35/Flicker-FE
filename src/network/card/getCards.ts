import _request from "../_request";
import { pickFromArr } from "../../utils/pickFromArr";
import { DeckID } from "../../models/deck";
import { Card, CardId } from "../../models/card";
import { mockCards } from "../../mock/card";

export type GetCardByIdReqData = {
  id: CardId[];
  cardSetId: DeckID;
};

/**
 * 获得某个卡片集中的的一组卡片
 * @returns 卡片集数组
 */
export async function getCards(data: GetCardByIdReqData): Promise<Card[]> {
  return mockCards.slice(0, 5);

  const res = await _request<Card[]>({
    url: `/cardset/${data.cardSetId}/card`,
    method: "GET",
    params: {
      id: `[${data.id.join(",")}]`,
    },
  });
}
