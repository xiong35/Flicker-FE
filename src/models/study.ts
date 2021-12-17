import { CardID } from "./card";

/** 卡组的记录 */
export type DeckRecord = {
  /** 总卡片数 */
  total: number;
  records: CardRecord[];
};

export type DeckRecordMap = DeckRecord & {
  /** 有多少已经掌握 */
  learnt: number;
  /** 上次学习卡组的时间, 秒时间戳 */
  last_study: number;
  recordMap: Record<CardID, CardRecord>;
};

/** 每道题的学习情况 */
export type CardRecord = {
  card_id: CardID;
  /** 秒时间戳 */
  last_study: number;
  /** 学习次数 */
  study_times: number;
  /**
   * status, 掌握情况\
   * - `0`: 未掌握
   * - `1`: 已掌握
   */
  status: StudyStatus;
};

export enum StudyStatus {
  LEARNING = 0,
  LEARNT = 1,
}
