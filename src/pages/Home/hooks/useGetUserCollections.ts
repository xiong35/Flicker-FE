import { useEffect, useState } from "react";

import { Deck } from "../../../models/deck";
import { getFavoriteReq } from "../../../network/user/favorite";
import { getRecordMapByIds } from "../../../utils/studyRecords/syncRecord";
import { Awaited } from "../../../utils/types";

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

  const [collectionRecordMap, setCollectionRecordMap] = useState<
    Awaited<ReturnType<typeof getRecordMapByIds>>
  >({});
  useEffect(() => {
    if (collections.length === 0) return;
    getRecordMapByIds(collections.map((c) => c.id)).then((map) =>
      setCollectionRecordMap(map)
    );
  }, [collections.length]);

  return { collections, collectionRecordMap };
};
