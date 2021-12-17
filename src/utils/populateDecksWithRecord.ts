import { DeckMini } from "../models/deck";
import { store } from "../redux/store";

/**
 * 将卡组详情填充上最近学习时间和学习进度
 */
export function populateDecksWithRecord(decks: DeckMini[]) {
  console.log("# populateDecksWithRecord", { decks });
  console.log(
    "# populateDecksWithRecord",
    store.getState().studyReducer.deckRecords
  );
}
