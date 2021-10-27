import "./index.scss";

import { useSetup } from "./hooks";

type DeckCardProps = {};

function DeckCard(props: DeckCardProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="deck_card">
      <div className="deck_card-title">title</div>
      <div className="deck_card-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        recusandae, cum dolorum blanditiis error enim illo eum pariatur quam
        explicabo id impedit esse numquam doloribus aperiam minima hic!
        Laboriosam, qui?
      </div>
      <div className="deck_card-footer">
        <div className="deck_card-footer-collected">123</div>
        <div className="deck_card-footer-visited">456</div>
        <div className="spacer"></div>
        <div className="deck_card-footer-time">2020/1/1 18:00</div>
      </div>
    </div>
  );
}

export default DeckCard;
