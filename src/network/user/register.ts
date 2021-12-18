import _request from "../_request";

export type RegisterReqData = {
  mail: string;
  username: string;
  password: string;
  code: string;
};

/**
 * 用户注册的函数
 * @returns 是否成功
 */
export async function registerReq(data: RegisterReqData) {
  const res = await _request({
    url: "/signup",
    method: "POST",
    data,
  });

  return res !== null;
}
