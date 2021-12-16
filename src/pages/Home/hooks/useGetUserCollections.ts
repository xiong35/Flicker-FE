import { useEffect, useState } from "react";

import { Deck } from "../../../models/deck";
import { getFavoriteReq } from "../../../network/user/favorite";

export const useGetUserCollections = () => {
  const [collections, setCollections] = useState<Deck[]>([]);

  const getCollections = async () => {
    const res = await getFavoriteReq();
    if (!res) return;
    setCollections(res);
  };

  useEffect(() => {
    getCollections();
  }, []);

  return { collections };
};
