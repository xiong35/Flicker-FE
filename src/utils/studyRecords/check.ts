import { CardRecord, DeckRecord } from "../../models/study";

export function _isDeckRecord(toCheck: DeckRecord): boolean {
  if (!toCheck) return false;
  if (toCheck.id === undefined) return false;
  if (toCheck.name === undefined) return false;
  if (toCheck.rec === undefined) return false;
  if (toCheck.tot === undefined) return false;

  return true;
}

export function _isCardRecord(toCheck: CardRecord): boolean {
  if (!toCheck) return false;
  if (toCheck.d === undefined) return false;
  if (toCheck.s === undefined) return false;

  return true;
}
