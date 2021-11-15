import "./index.scss";

import { useHistory } from "react-router-dom";

import { useSetup } from "./hooks";
import Star from "../../imgComponents/Star";
import Fire from "../../imgComponents/Fire";

type DeckCardProps = {};

function DeckCard(props: DeckCardProps) {
  const {} = props;
  const {} = useSetup();

  const history = useHistory();

  return (
    <div className="deck_card" onClick={() => history.push("/deck/intro/213")}>
      <div className="deck_card-title">title</div>
      <div className="deck_card-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        recusandae, cum dolorum blanditiis error enim illo eum pariatur quam
        explicabo id impedit esse numquam doloribus aperiam minima hic!
        Laboriosam, qui?
      </div>
      <div className="deck_card-footer">
        <div className="deck_card-footer-collected">
          <Star className="deck_card-footer-icon" />
          <span>{123}</span>
        </div>
        <div className="deck_card-footer-visited">
          <Fire className="deck_card-footer-icon scale-110" />
          <span>{456}</span>
        </div>
        <div className="spacer"></div>
        <div className="deck_card-footer-time">2020/1/1 18:00</div>
      </div>
    </div>
  );
}

export default DeckCard;
