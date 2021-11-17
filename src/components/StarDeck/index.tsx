import "./index.scss";

type StarDeckProps = {
  progress: number; // 学习进度，进度条百分比
};

export default function StarDeck(props: StarDeckProps) {
  const { progress } = props;

  return (
    <div className="star_deck">
      {progress > 1 && (
        <div className="star_deck-percent" style={{ width: progress + "%" }}>
          <div className="star_deck-percent-text">{progress + "%"}</div>
        </div>
      )}
      <div className="star_deck-title">title</div>
      <div className="star_deck-last">上次学习：2021/11/15</div>
    </div>
  );
}
