import { Card } from "../../models/card";
import _request from "../_request";

export type UpdateCardReqParams = {
  cardsetID: string;
  cardID: string;
};

export type UpdateCardReqData = Pick<
  Card,
  "answer" | "audio" | "image" | "question"
>;

/**
 * DESCRIPTION
 * @returns
 */
export async function updateCardReq(
  data: UpdateCardReqData,
  params: UpdateCardReqParams
) {
  const res = await _request({
    url: `/cardset/${params.cardsetID}/card/${params.cardID}`,
    method: "PUT",
    data,
  });

  return res;
}
