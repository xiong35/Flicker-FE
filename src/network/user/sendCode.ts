import _request from "../_request";

export type SendCodeReqData = {
  mail: string;
};

/**
 * 对指定邮箱发送验证码
 * @returns 是否成功
 */
export async function sendCodeReq(data: SendCodeReqData) {
  const res = await _request({
    url: "/verify",
    method: "POST",
    data,
  });

  return res !== null;
}
