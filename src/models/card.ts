import { nanoid } from "@reduxjs/toolkit";

export class Card {
  id: CardID = nanoid();
  /** 题面 */
  question = "";
  /** 答案 */
  answer = "";
  /** 图片url */
  image?: string;
  /** 音频url */
  audio?: string;
}

export type CardID = string;
