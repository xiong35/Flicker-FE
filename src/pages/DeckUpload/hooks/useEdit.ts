import { useEffect, useState } from "react";

import { Card } from "../../../models/card";
import { getCards } from "../../../network/card/getCards";
import { getDeckByIdReq } from "../../../network/deck/getDeckById";
import { useDeck } from "./useDeck";

type useEditProps = {
  id?: string;
  setCards: (cards: Card[]) => void;
  setForm: ReturnType<typeof useDeck>["setForm"];
};

export const useEdit = (props: useEditProps) => {
  const { setCards, setForm, id } = props;

  const initEdit = async () => {
    if (!id) return;
    const deck = await getDeckByIdReq({ id });
    if (!deck) return;
    setForm({
      name: deck.name,
      access: deck.access + "",
      description: deck.description,
    });
    const cards = await getCards({ ids: deck.cards, deckID: deck.id });
    if (cards) setCards(cards);
  };

  useEffect(() => {
    initEdit();
  }, []);

  return {};
};
