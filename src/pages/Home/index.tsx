import "./index.scss";

import { useSetup } from "./hooks";
import DeckCard from "../../components/DeckCard";
import TheBottomTabs from "../../components/TheBottomTabs";

type HomeProps = {};

function Home(props: HomeProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="home">
      <div className="home-deck_container">
        {Array.from({ length: 20 }, (v, i) => i).map((i) => (
          <DeckCard key={i} />
        ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Home;
