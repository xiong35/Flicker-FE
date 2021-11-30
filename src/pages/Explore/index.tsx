import "./index.scss";

import { useHistory } from "react-router";

import { Button, Fab, TextField } from "@mui/material";

import { useDecks } from "./hooks/useDecks";
import AddIcon from "../../imgComponents/AddIcon";
import TheBottomTabs from "../../components/TheBottomTabs";
import DeckCard from "../../components/DeckCard";

type ExploreProps = {};

function Explore(props: ExploreProps) {
  const {} = props;
  const history = useHistory();
  const { decks, getRandDecks } = useDecks();

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

      <div className="explore-search">
        <TextField></TextField>
      </div>

      <div className="explore-search_body"></div>

      <div className="explore-random_body">
        {decks.map((deck) => (
          <DeckCard deckBrief={deck} key={deck.id} />
        ))}
        <Button
          className="explore-random_body-btn m"
          variant="contained"
          onClick={getRandDecks}
        >
          换一批
        </Button>
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Explore;
