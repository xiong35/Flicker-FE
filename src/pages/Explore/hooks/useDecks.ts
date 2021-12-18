import { useEffect, useState } from "react";

import { DeckBrief } from "../../../models/deck";
import { exploreCardsetReq } from "../../../network/cardset/exploreCardset";

export const useDecks = () => {
  const [decks, setDecks] = useState<DeckBrief[] | null>(null);

  useEffect(() => {
    getRandDecks();
  }, []);

  async function getRandDecks() {
    setDecks(null);
    const newDecks = await exploreCardsetReq();
    if (!newDecks) return setDecks([]);

    setDecks(newDecks);
  }

  return { decks, getRandDecks, setDecks };
};
