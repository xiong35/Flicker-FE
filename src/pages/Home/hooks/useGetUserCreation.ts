import { useEffect, useState } from "react";

import { getUserCreationReq } from "../../../network/user/getUserCreation";
import { Deck } from "../../../models/deck";

export const useGetUserCreations = () => {
  const [creations, setCreations] = useState<Deck[]>([]);

  const getCreations = async () => {
    const res = await getUserCreationReq();
    if (!res) return;
    setCreations(res);
  };

  useEffect(() => {
    getCreations();
  }, []);

  return { creations };
};
