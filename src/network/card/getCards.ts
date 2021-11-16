import _request from "../_request";
import { pickFromArr } from "../../utils/pickFromArr";
import { Card, CardId } from "../../models/card";
import { mockCards } from "../../mock/card";

export type GetCardByIdReqData = {
  id: CardId;
};

/**
 * DESCRIPTION
 * @returns
 */
export async function getCards(data: GetCardByIdReqData): Promise<Card[]> {
  // const res = await _request({
  //   url: "/#TODO",
  //   method: "GET",
  //   data,
  // });

  return mockCards.slice(0, 5);
}
