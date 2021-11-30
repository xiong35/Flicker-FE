import "./index.scss";

import { useHistory } from "react-router";

import { Button, Fab, TextField } from "@mui/material";

import { useSearch } from "./hooks/useSearch";
import { useDecks } from "./hooks/useDecks";
import Search from "../../imgComponents/Search";
import AddIcon from "../../imgComponents/AddIcon";
import TheBottomTabs from "../../components/TheBottomTabs";
import NoMore from "../../components/NoMore";
import Empty from "../../components/Empty";
import DeckCard from "../../components/DeckCard";

type ExploreProps = {};

function Explore(props: ExploreProps) {
  const {} = props;
  const history = useHistory();
  const { decks, getRandDecks, setDecks } = useDecks();
  const { doSearch, keyword, setKeyword, isSearching, noMore } =
    useSearch(setDecks);

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

      <TextField
        className="explore-search m"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && doSearch();
        }}
        InputProps={{
          endAdornment: (
            <Search onClick={doSearch} className="explore-search-icon"></Search>
          ),
        }}
      ></TextField>

      <div className="explore-decks">
        {decks.map((deck) => (
          <DeckCard deckBrief={deck} key={deck.id} />
        ))}

        {decks.length === 0 && <Empty></Empty>}
        {noMore && <NoMore></NoMore>}
      </div>

      {!isSearching && (
        <Button
          className="explore-random_btn m"
          variant="contained"
          onClick={getRandDecks}
        >
          换一批
        </Button>
      )}
      <TheBottomTabs />
    </div>
  );
}

export default Explore;
