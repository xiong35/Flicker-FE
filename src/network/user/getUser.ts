import _request from "../_request";
import { getToken } from "../../utils/token";
import { UserID, UserPublic } from "../../models/user";

export type GetUserReqData = {
  id?: UserID;
};

/**
 * 获得用户详情, 若不传 id 则根据token获得自己的信息
 * @returns
 */
export async function getUserReq(data?: GetUserReqData) {
  if (!getToken() && (!data || !data.id)) return null;

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
