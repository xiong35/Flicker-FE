import { mockCards } from "./card";
import { Deck } from "../models/deck";

export const mockDeck: Deck[] = [
  {
    access: 1,
    cards: mockCards,
    description: "这是一段描述",
    id: "1",
    name: "一个卡片集",
    template: "",
  },
  {
    access: 1,
    cards: mockCards.reverse(),
    description: "this is description",
    id: "2",
    name: "a card set",
    template: "",
  },
];
