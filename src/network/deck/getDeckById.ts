import { mockDecks } from "../../mock/deck";
import { Deck } from "../../models/deck";
import { pickFromArr } from "../../utils/pickFromArr";
import _request from "../_request";

export type GetDeckByIdReqData = {};

/**
 * DESCRIPTION
 * @returns
 */
export async function getDeckByIdReq(data: GetDeckByIdReqData): Promise<Deck> {
  // const res = await _request({
  //   url: "/#TODO",
  //   method: "GET",
  //   data,
  // });

  return pickFromArr(mockDecks);
}
