import { useEffect, useState } from "react";

import { DeckMini } from "../../../models/deck";
import { getUserCreationReq } from "../../../network/user/getUserCreation";
import { getRecordMapByIds } from "../../../utils/studyRecords/syncRecord";

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

  const [creationRecordMap, setCreationRecordMap] = useState<
    Awaited<ReturnType<typeof getRecordMapByIds>>
  >({});
  useEffect(() => {
    if (creations.length === 0) return;
    getRecordMapByIds(creations.map((c) => c.id)).then((map) =>
      setCreationRecordMap(map)
    );
  }, [creations.length]);

  return { creations, creationRecordMap };
};
