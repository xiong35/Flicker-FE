import "./index.scss";

import { useSetup } from "./hooks";
import TheBottomTabs from "../../components/TheBottomTabs";
import StarDeck from "../../components/StarDeck";
import DeckCard from "../../components/DeckCard";

type HomeProps = {};

function Home(props: HomeProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="home">
      <div className="home-deck_container">
        {Array.from({ length: 20 }).map((_, i) => (
          <StarDeck key={i} progress={~~(Math.random() * 100)} />
        ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Home;
