import _request from "../_request";

export type DelCardsetReqData = {
  id: string;
};

/**
 * DESCRIPTION
 * @returns
 */
export async function delCardsetReq(data: DelCardsetReqData) {
  const res = await _request({
    url: `/cardset/${data.id}`,
    method: "DELETE",
    data,
  });

  return res;
}
