import { DeckRecord, DeckRecordMap, StudyStatus } from "../../models/study";

export function recordArr2Map(record: DeckRecord): DeckRecordMap {
  const map: DeckRecordMap = {
    ...record,
    learnt: 0,
    recordMap: {},
    last_study: 0,
  };

  record.records.forEach((r) => {
    map.recordMap[r.id] = r;
    if (r.status === StudyStatus.LEARNT) map.learnt++;
    if (r.last_study > map.last_study) map.last_study = r.last_study;
  });

  return map;
}
