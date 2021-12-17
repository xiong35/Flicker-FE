import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Deck, DeckID, initDeck } from "../../../models/deck";
import { delCardsetReq } from "../../../network/cardset/delCardset";
import { getDeckByIdReq } from "../../../network/deck/getDeckById";
import { changeFavoriteReq } from "../../../network/user/favorite";
import { showToast } from "../../../utils/showToast";

export function useDeck(id: DeckID) {
  const [deck, setDeck] = useState<Deck | null>(null);
  const history = useHistory();

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

  const delDeck = async () => {
    if (!deck) return;
    const res = await delCardsetReq({ id: deck.id });
    if (res) {
      showToast("删除成功", "success");
      history.push("/home");
    }
  };

  return { deck, switchFavorite, delDeck };
}
