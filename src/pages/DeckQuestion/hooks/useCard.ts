import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../../models/card";
import { getCardByIdReq } from "../../../network/card/getCardById";
import { getCards } from "../../../network/card/getCards";

const QUEUE_LEN = 5;

export function useCard() {
  const [cardQueue, setCardQueue] = useState<Card[]>([]);

  const { id } = useParams<{ id: string }>();

  async function getNextCard(direction: "forward" | "backward") {
    const card = await getCardByIdReq({ id });

    const newCardQueue = [...cardQueue];
    if (direction === "forward") {
      if (newCardQueue.length < QUEUE_LEN) {
        newCardQueue.push;
      }
    }
    if (!card) return; // TODO show toast;
  }

  async function initCards() {
    const cards = await getCards({ id });
    if (!cards) return; // TODO show toast;

    setCardQueue(cards);
  }

  useEffect(() => {
    initCards();
  }, []);

  const card = cardQueue.find((card) => card.id === id);

  return { card };
}
