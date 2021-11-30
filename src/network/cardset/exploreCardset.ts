import _request from "../_request";
import { Deck, DeckBrief } from "../../models/deck";

export type ExploreCardsetReqData = {
  count: number;
};

/**
 * 获得一定数量的随机卡组
 * @returns 卡组数组
 */
export async function exploreCardsetReq(
  params: ExploreCardsetReqData = { count: 10 }
) {
  const res = await _request<DeckBrief[]>({
    url: "/cardset/random",
    method: "GET",
    params,
  });

  return res;
}
