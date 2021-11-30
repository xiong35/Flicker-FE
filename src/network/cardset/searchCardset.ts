import _request from "../_request";
import { DeckBrief } from "../../models/deck";
import { PER_PAGE } from "../../constants/request";

export type SearchCardsetReqData = {
  /* 字符串，必需，关键词 */
  keyword: string;
  /* 整数，可选，第几页 */
  page: number;
};

/**
 * 根据关键词搜索卡组(带分页)
 * @returns 卡组列表
 */
export async function searchCardsetReq(params: SearchCardsetReqData) {
  const res = await _request<DeckBrief[]>({
    url: "/cardset",
    method: "GET",
    params: {
      keyword: params.keyword,
      limit: PER_PAGE,
      skip: PER_PAGE * params.page,
    },
  });

  return res;
}
