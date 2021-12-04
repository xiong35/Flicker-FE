import { useState } from "react";

import { CardQueue } from "./useCard";
import { wait } from "../../../utils/wait";

export function useAnimate(
  switchCard: (direction: "forward" | "backward") => Promise<any>,
  cardQueue?: CardQueue
) {
  const [position, setPosition] = useState<"mid" | "left" | "right">("mid");

  async function animateTo(direction: "forward" | "backward") {
    if (position !== "mid") return;

    if (direction === "forward") setPosition("left");
    else setPosition("right");

    // 300 ms 后 resolve + 设置回 mid
    await wait(300);
    return () => setPosition("mid");
  }

  async function switchWithAnim(direction: "forward" | "backward") {
    if (!cardQueue) return;
    if (direction === "forward") {
      if (!cardQueue[3]) return;
    } else {
      if (!cardQueue[1]) return;
    }

    // 切换卡片时卡片先滚过去
    const setToMid = await animateTo(direction); // 若滚动成功返回整个操作结束的回调(即设置会中间位置)
    if (setToMid) {
      // 等待更新卡片和卡片队列
      await switchCard(direction);
      // 网络请求结束后数据已经变化, 设置回中间位置即可
      setToMid();
    }
  }

  return { position, switchWithAnim };
}
