import { DeckMini } from "../../models/deck";
import _request from "../_request";

/**
 * DESCRIPTION
 * @returns
 */
export async function getUserCreationReq() {
  const res = await _request<DeckMini[]>({
    url: "/user/created",
    method: "GET",
  });

  return res;
}
