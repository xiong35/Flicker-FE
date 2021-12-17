import { CardRecord, DeckRecord } from "../../models/study";

export function _isDeckRecord(toCheck: DeckRecord): boolean {
  if (!toCheck) return false;
  if (typeof toCheck.records !== "object") return false;
  if (typeof toCheck.total !== "number") return false;

  return true;
}

export function _isCardRecord(toCheck: CardRecord): boolean {
  if (!toCheck) return false;
  if (typeof toCheck.card_id !== "string") return false;
  if (typeof toCheck.last_study !== "number") return false;
  if (typeof toCheck.status !== "number") return false;
  if (typeof toCheck.study_times !== "number") return false;

  return true;
}
