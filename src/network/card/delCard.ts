import _request from "../_request";

export type DelCardReqData = {
  cardsetID: string;
  cardID: string;
};

/**
 * DESCRIPTION
 * @returns
 */
export async function delCardReq(data: DelCardReqData) {
  const res = await _request({
    url: `/cardset/${data.cardsetID}/card/${data.cardID}`,
    method: "DELETE",
  });

  return res;
}
