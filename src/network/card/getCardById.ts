import { mockCards } from "../../mock/card";
import { Card } from "../../models/card";
import _request from "../_request";

export type GetCardByIdReqData = {};

/**
 * DESCRIPTION
 * @returns
 */
export async function getCardByIdReq(data: GetCardByIdReqData): Promise<Card> {
  // const res = await _request({
  //   url: "/#TODO",
  //   method: "GET",
  //   data,
  // });

  return mockCards[0];
}
