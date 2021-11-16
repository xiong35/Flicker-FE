export type Card = {
  id: CardId;
  /** 题面 */
  question: string;
  /** 答案 */
  answer: string;
  /** 图片url */
  image?: string;
  /** 音频url */
  audio?: string;
};

export type CardId = string;
