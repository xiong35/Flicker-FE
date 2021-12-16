import { Deck } from "../../models/deck";
import _request from "../_request";

export type ChangeFavoriteReqData = {
  cardset_id: string; // 卡片集id
  like: boolean; // 点击收藏按钮之前该卡片集是否被收藏，请求会将其取反
};

/**
 * DESCRIPTION
 * @returns
 */
export async function changeFavoriteReq(data: ChangeFavoriteReqData) {
  const res = await _request({
    url: "/user/favorite",
    method: "POST",
    data,
  });

  return res;
}

export async function getFavoriteReq() {
  const res = await _request<Deck[]>({
    url: "/user/favorite",
    method: "GET",
  });

  return res;
}
