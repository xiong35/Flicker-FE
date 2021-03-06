import { Card, CardID } from "./card";

export type DeckID = string;

/** 仅展示学习进度 */
export type DeckMini = Pick<
  Deck,
  "id" | "owner_id" | "name" | "description" | "access"
>;
export type DeckBrief = {
  id: DeckID;

  /** 名称 */
  name: string;

  /** 卡片集描述 */
  description: string;

  /**
   * 整数，可选，访问权限
   * 0-仅创建者可见，1-所有人可见
   * 默认为 0
   */
  access: 0 | 1;

  /** 字符串，收藏数量 */
  favorite_count: string;
  /** 字符串，访问数量 */
  visit_count: string;
  /** 整数，创建时间戳 */
  create_time: number;
};

export type Deck = {
  /**
   * 模板
   * - 模板一定程度上规定了卡片的样式与布局
   * - 暂定为HTML格式，具体如何设计看前端
   * - 当此字段为空时应使用默认的样式
   */
  template: string;

  /** 包含的卡片 id */
  cards: CardID[];

  /** 字符串，创建者id */
  owner_id: string;
  /** 字符串，创建者用户名 */
  owner_name: string;
  /** 布尔值，是否被当前登录用户喜欢 */
  is_favorite: boolean;
} & DeckBrief;

export const initDeck: Deck = {
  access: 0,
  cards: [],
  description: "",
  id: "",
  name: "",
  template: "",
  create_time: Date.now(),
  favorite_count: "0",
  owner_id: "",
  owner_name: "",
  visit_count: "0",
  is_favorite: false,
};
