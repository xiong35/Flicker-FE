import { Card } from "../../models/card";
import _request from "../_request";

export type CreateCardReqData = Pick<
  Card,
  "answer" | "audio" | "image" | "question"
> & { id: undefined };

export type CreateCardReqParams = {
  cardsetID: string;
};

/**
 * DESCRIPTION
 * @returns
 */
export async function createCardReq(
  data: CreateCardReqData,
  params: CreateCardReqParams
) {
  const res = await _request<string>({
    url: `/cardset/${params.cardsetID}/card`,
    method: "POST",
    data,
  });

  return res;
}
