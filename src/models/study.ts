import { Deck } from "./deck";
import { CardID } from "./card";

/* 学习记录相关定义 */

/** 卡组的记录 */
export type DeckRecord = Pick<Deck, "id" | "name"> & {
  /** record, 题库中卡片的学习记录 */
  rec: Record<CardID, CardRecord[]>;
  /** total, 此题库的总题目数 */
  tot: number;
  /** latest study time, 最近一次学习时间, 毫秒时间戳 */
  l_s_t: number;
};

/** 每道题的学习情况 */
export type CardRecord = {
  /** day, 在哪个日期学过这道题 */
  d: string;
  /**
   * status, 掌握情况\
   * - `0`: 未设置
   * - `1`: 已掌握
   * - `-1`: 未掌握
   */
  s: 0 | 1 | -1;
};
