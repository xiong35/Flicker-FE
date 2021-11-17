import _request from "../_request";

export type LoginReqData = {
  mail: string;
  password: string;
};

/**
 * 用户登录的接口
 * @returns 是否成功
 */
export async function loginReq(data: LoginReqData) {
  const token = await _request<string>({
    url: "/login",
    method: "POST",
    data,
  });

  return token;
}
