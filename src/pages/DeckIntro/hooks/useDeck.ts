import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getDeckByIdReq } from "../../../network/deck/getDeckById";
import { Deck, DeckID, initDeck } from "../../../models/deck";

export function useDeck(id: DeckID) {
  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    getDeckByIdReq({ id }).then((res) => {
      setDeck(res);
    });
  });

  return { deck };
}
