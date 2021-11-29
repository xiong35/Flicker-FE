import { mockCards } from "./card";
import { Deck } from "../models/deck";

export const mockDecks: Deck[] = [
  {
    access: 1,
    cards: mockCards.map((c) => c.id),
    description: "这是一段描述",
    id: "1",
    name: "一个卡片集",
    template: "",
  },
  {
    access: 1,
    cards: mockCards.reverse().map((c) => c.id),
    description: "this is description",
    id: "2",
    name: "a card set",
    template: "",
  },
];
