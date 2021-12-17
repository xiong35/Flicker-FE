import "./index.scss";

import { DeckMini } from "../../models/deck";
import { DeckRecordMap } from "../../models/study";
import { dateFormat } from "../../utils/dateFormat";
import { openNewTab } from "../../utils/openNewTab";

type StarDeckProps = {
  deck: DeckMini;
  record?: DeckRecordMap | null;
};

export default function StarDeck(props: StarDeckProps) {
  const { record, deck } = props;

  const progress =
    (record && Math.round((record.learnt * 100) / record.total)) || 0;

  return (
    <div
      className="star_deck"
      onClick={() => openNewTab({ path: `/deck/${deck.id}/intro` })}
    >
      {progress > 1 && (
        <div className="star_deck-percent" style={{ width: progress + "%" }}>
          <div className="star_deck-percent-text">{progress + "%"}</div>
        </div>
      )}
      <div className="star_deck-title">{deck.name}</div>
      {record && record.last_study ? (
        <div className="star_deck-last">
          上次学习：{dateFormat(record.last_study)}
        </div>
      ) : (
        <div className="star_deck-last">暂未学习</div>
      )}
    </div>
  );
}
