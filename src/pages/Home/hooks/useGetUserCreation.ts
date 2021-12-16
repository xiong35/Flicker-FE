import { useEffect, useState } from "react";

import { DeckMini } from "../../../models/deck";
import { getUserCreationReq } from "../../../network/user/getUserCreation";

export const useGetUserCreations = () => {
  const [creations, setCreations] = useState<DeckMini[]>([]);

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
