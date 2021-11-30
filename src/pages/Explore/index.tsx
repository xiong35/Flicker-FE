import "./index.scss";

import { useHistory } from "react-router";

import { Fab } from "@mui/material";

import { useDecks } from "./hooks/useDecks";
import AddIcon from "../../imgComponents/AddIcon";
import TheBottomTabs from "../../components/TheBottomTabs";
import DeckCard from "../../components/DeckCard";

type ExploreProps = {};

function Explore(props: ExploreProps) {
  const {} = props;
  const history = useHistory();
  const { decks } = useDecks();

  return (
    <div className="explore">
      <Fab
        color="primary"
        aria-label="add"
        className="explore-add"
        onClick={() => history.push("/deck/upload")}
      >
        <AddIcon className="explore-add-icon" />
      </Fab>
      <div className="explore-deck_container">
        {decks.map((deck) => (
          <DeckCard deckBrief={deck} key={deck.id} />
        ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Explore;
