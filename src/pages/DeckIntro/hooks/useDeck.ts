import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Deck, DeckID, initDeck } from "../../../models/deck";
import { getDeckByIdReq } from "../../../network/deck/getDeckById";
import { changeFavoriteReq } from "../../../network/user/favorite";

export function useDeck(id: DeckID) {
  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    getDeckByIdReq({ id }).then((res) => {
      if (res) setDeck(res);
    });
  }, []);

  const switchFavorite = () => {
    if (!deck) return;
    changeFavoriteReq({ cardset_id: deck.id, like: deck.is_favorite });
    setDeck({ ...deck, is_favorite: !deck.is_favorite });
  };

  return { deck, switchFavorite };
}
