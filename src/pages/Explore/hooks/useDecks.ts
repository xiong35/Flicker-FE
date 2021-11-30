import { useEffect, useState } from "react";

import { exploreCardsetReq } from "../../../network/cardset/exploreCardset";
import { DeckBrief } from "../../../models/deck";

export const useDecks = () => {
  const [decks, setDecks] = useState<DeckBrief[]>([]);

  useEffect(() => {
    getRandDecks();
  }, []);

  async function getRandDecks() {
    const newDecks = await exploreCardsetReq();
    if (!newDecks) return;

    setDecks(newDecks);
  }

  return { decks, getRandDecks };
};
