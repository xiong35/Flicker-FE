import "./index.scss";

import { useHistory } from "react-router";

import { Button, Fab, TextField } from "@mui/material";

import DeckCard from "../../components/DeckCard";
import Empty from "../../components/Empty";
import Loading from "../../components/Loading";
import NoMore from "../../components/NoMore";
import TheBottomTabs from "../../components/TheBottomTabs";
import AddIcon from "../../imgComponents/AddIcon";
import Search from "../../imgComponents/Search";
import { useDecks } from "./hooks/useDecks";
import { useSearch } from "./hooks/useSearch";

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
        className="explore-search m reset_mui_input_primary"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="输入关键词查找卡片集"
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
        {decks === null ? (
          <Loading full={false}></Loading>
        ) : decks.length === 0 ? (
          <Empty></Empty>
        ) : (
          decks.map((deck) => <DeckCard deckBrief={deck} key={deck.id} />)
        )}
        {noMore && <NoMore></NoMore>}
      </div>

      {!isSearching && (
        <Button
          className="explore-random_btn m reset_mui_button_contained_primary"
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
