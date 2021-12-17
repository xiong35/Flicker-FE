import { CardID } from "./card";

/** 卡组的记录 */
export type DeckRecord = {
  /** 总卡片数 */
  total: number;
  records: CardRecord[];
};

/** 每道题的学习情况 */
export type CardRecord = {
  id: CardID;
  /** 秒时间戳 */
  last_study: number;
  /** 学习次数 */
  study_times: number;
  /**
   * status, 掌握情况\
   * - `0`: 未掌握
   * - `1`: 已掌握
   */
  status: 0 | 1;
};
