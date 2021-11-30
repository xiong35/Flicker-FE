import _request from "../_request";
import { UserID, UserPublic } from "../../models/user";

export type GetUserReqData = {
  id?: UserID;
};

/**
 * DESCRIPTION
 * @returns
 */
export async function getUserReq(data?: GetUserReqData) {
  const res = await _request<UserPublic>(
    {
      url: `/user` + (data?.id ? `/${data.id}` : ""),
      method: "GET",
      data,
    },
    false
  );

  return res;
}
