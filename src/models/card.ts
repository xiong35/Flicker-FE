export type Card = {
  id: string;
  /** 题面 */
  question: string;
  /** 答案 */
  answer: string;
  /** 图片url */
  image?: string;
  /** 音频url */
  audio?: string;
};
