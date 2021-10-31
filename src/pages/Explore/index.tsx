import "./index.scss";

import { useSetup } from "./hooks";
import TheBottomTabs from "../../components/TheBottomTabs";
import DeckCard from "../../components/DeckCard";

type ExploreProps = {};

function Explore(props: ExploreProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="explore">
      <div className="explore-deck_container">
        {Array.from({ length: 20 }, (v, i) => i).map((i) => (
          <DeckCard key={i} />
        ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Explore;
