import _request from "../_request";

/**
 * - username：字符串，可选，用户名
 * - password：字符串，可选，密码
 * - code：字符串，当password不为空时必需，邮件验证码
 * - avatar：字符串，可选，头像 url
 */
export type UpdateUserReqData = {
  password?: string;
  code?: string;
  username?: string;
  avatar?: string;
};

/**
 * 更新 User 的部分字段
 * @returns 是否成功
 */
export async function updateUserReq(data: UpdateUserReqData) {
  const res = await _request({
    url: "/user",
    method: "PUT",
    data,
  });

  return res !== null;
}
