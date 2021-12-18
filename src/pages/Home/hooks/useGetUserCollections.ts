import { useEffect, useState } from "react";

import { Deck } from "../../../models/deck";
import { getFavoriteReq } from "../../../network/user/favorite";
import { getRecordMapByIds } from "../../../utils/studyRecords/syncRecord";
import { Awaited } from "../../../utils/types";

export const useGetUserCollections = () => {
  const [collections, setCollections] = useState<Deck[] | null>(null);

  const getCollections = async () => {
    const res = await getFavoriteReq();
    if (!res) return;
    setCollections(res.reverse());
  };

  useEffect(() => {
    getCollections();
  }, []);

  const [collectionRecordMap, setCollectionRecordMap] = useState<Awaited<
    ReturnType<typeof getRecordMapByIds>
  > | null>(null);
  useEffect(() => {
    if (!collections) return;
    getRecordMapByIds(collections.map((c) => c.id)).then((map) =>
      setCollectionRecordMap(map)
    );
  }, [collections]);

  return { collections, collectionRecordMap };
};
