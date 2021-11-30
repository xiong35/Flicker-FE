import { useEffect, useRef, useState } from "react";

import { showToast } from "../../../utils/showToast";
import { hasScrolledToBottom } from "../../../utils/hasScrolledToBottom";
import { searchCardsetReq } from "../../../network/cardset/searchCardset";
import { DeckBrief } from "../../../models/deck";
import { PER_PAGE } from "../../../constants/request";

export function useSearch(
  setDecks: React.Dispatch<React.SetStateAction<DeckBrief[]>>
) {
  const [keyword, setKeyword] = useState("");
  /** page 为 undefined 时显示随机卡组, 不为 undefined 则显示搜索结果 */
  const [page, setPage] = useState<undefined | number>();
  const pageRef = useRef(page);
  pageRef.current = page;

  const [noMore, setNoMore] = useState(false);
  const noMoreRef = useRef(noMore);
  noMoreRef.current = noMore;

  async function doSearch() {
    if (!keyword) return showToast("关键词为空", "warning");

    const decks = await searchCardsetReq({ keyword, page: 0 });
    if (!decks) return;

    setDecks(decks);
    setPage(0);
    setNoMore(false);
  }

  async function loadMore() {
    // 需先 doSearch 再 loadMore
    if (pageRef.current === undefined) return;
    // 若 nomore 了就不搜索
    if (noMoreRef.current) return;
    const newPage = pageRef.current + 1;

    const newDecks = await searchCardsetReq({ keyword, page: newPage });
    if (!newDecks) return;

    setDecks((oldDecks) => [...oldDecks, ...newDecks]);
    setPage(newPage);
    if (newDecks.length !== PER_PAGE) {
      setNoMore(true);
    }
  }

  useEffect(() => {
    if (page !== 0) return;
    //当 page 被置为 0 时意味着开始了新一轮搜索, 需重新注册滑动事件

    let timer: number | undefined;

    const throttled = () => {
      if (timer) return;
      if (!hasScrolledToBottom()) return;
      timer = window.setTimeout(() => {
        loadMore();
        timer = undefined;
      }, 100);
    };

    window.onscroll = () => {
      throttled();
    };

    return () => clearTimeout(timer);
  }, [page]);

  const isSearching = page !== undefined;

  return { keyword, setKeyword, doSearch, loadMore, isSearching, noMore };
}
