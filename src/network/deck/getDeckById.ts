import { Deck, DeckID } from "../../models/deck";
import _request from "../_request";

export type GetDeckByIdReqData = {
  id: DeckID;
};

/**
 * 根据 ID 获得一个卡片集的简略信息
 * @returns 得到的卡片集
 */
export async function getDeckByIdReq(data: GetDeckByIdReqData) {
  const res = await _request<Deck>({
    url: `/cardset/${data.id}`,
    method: "GET",
  });

  return res;
}
