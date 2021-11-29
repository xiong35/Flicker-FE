import { Deck } from "../../models/deck";
import _request from "../_request";

export type CreateCardsetReqData = Pick<
  Deck,
  "access" | "description" | "name"
>;

/**
 * DESCRIPTION
 * @returns
 */
export async function createCardsetReq(data: CreateCardsetReqData) {
  const res = await _request<string>({
    url: "/cardset",
    method: "POST",
    data,
  });

  return res;
}
