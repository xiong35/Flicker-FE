import { useEffect, useState } from "react";
import { DeckID } from "../../../models/deck";
import { DeckRecordMap } from "../../../models/study";
import { getRecordByDeckIDFromLocal } from "../../../utils/studyRecords/syncRecord";

export function useRecord(id: DeckID) {
  const [record, setRecord] = useState<DeckRecordMap>();

  useEffect(() => {
    const record = getRecordByDeckIDFromLocal(id);

    if (record) {
      setRecord(record);
    }
  }, []);

  return { record };
}
