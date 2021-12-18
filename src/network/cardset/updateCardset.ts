import { Deck } from "../../models/deck";
import _request from "../_request";

export type UpdateCardsetReqData = Pick<
  Deck,
  "access" | "description" | "name"
>;

type UpdateCardsetReqParams = {
  id: string;
};

/**
 * DESCRIPTION
 * @returns
 */
export async function updateCardsetReq(
  data: UpdateCardsetReqData,
  params: UpdateCardsetReqParams
) {
  const res = await _request({
    url: `/cardset/${params.id}`,
    method: "PUT",
    data,
  });

  return res;
}
