import "./index.scss";

import { useHistory } from "react-router-dom";

import { useSetup } from "./hooks";
import { dateFormat } from "../../utils/dateFormat";
import { DeckBrief } from "../../models/deck";
import Star from "../../imgComponents/Star";
import Fire from "../../imgComponents/Fire";

type DeckCardProps = {
  deckBrief: DeckBrief;
};

function DeckCard(props: DeckCardProps) {
  const { deckBrief } = props;
  const {} = useSetup();

  const history = useHistory();

  return (
    <div
      className="deck_card"
      onClick={() => history.push(`/deck/${deckBrief.id}/intro`)}
    >
      <div className="deck_card-title">{deckBrief.name}</div>
      <div className="deck_card-desc">{deckBrief.description}</div>
      <div className="deck_card-footer">
        <div className="deck_card-footer-collected">
          <Star className="deck_card-footer-icon" />
          <span>{deckBrief.favorite_count}</span>
        </div>
        <div className="deck_card-footer-visited">
          <Fire className="deck_card-footer-icon scale-110" />
          <span>{deckBrief.visit_count}</span>
        </div>
        <div className="spacer"></div>
        <div className="deck_card-footer-time">
          {dateFormat(deckBrief.create_time)}
        </div>
      </div>
    </div>
  );
}

export default DeckCard;
