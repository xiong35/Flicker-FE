import { useEffect, useState } from "react";

import { Deck } from "../../../models/deck";
import { getUserCreationReq } from "../../../network/user/getUserCreation";

export const useGetUserCreation = () => {
  const [creation, setCreation] = useState<Deck[]>([]);

  const getCreation = async () => {
    const res = await getUserCreationReq();
    if (!res) return;
    setCreation(res);
  };

  useEffect(() => {
    getCreation();
  }, []);

  return { creation };
};
