import "./index.scss";

import { Deck } from "../../models/deck";

type StarDeckProps = {
  progress: number; // 学习进度，进度条百分比
  deck: Deck;
};

export default function StarDeck(props: StarDeckProps) {
  const { progress, deck } = props;

  return (
    <div className="star_deck">
      {progress > 1 && (
        <div className="star_deck-percent" style={{ width: progress + "%" }}>
          <div className="star_deck-percent-text">{progress + "%"}</div>
        </div>
      )}
      <div className="star_deck-title">{deck.name}</div>
      <div className="star_deck-last">上次学习：2021/11/15</div>
    </div>
  );
}
