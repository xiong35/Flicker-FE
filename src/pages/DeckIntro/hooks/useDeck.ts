import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getDeckByIdReq } from "../../../network/deck/getDeckById";
import { Deck, initDeck } from "../../../models/deck";

export function useDeck() {
  let { id } = useParams<{ id: string }>();

  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    getDeckByIdReq({ id }).then((res) => {
      setDeck(res);
    });
  });

  return { deck };
}
