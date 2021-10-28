import "./index.scss";

import { useSetup } from "./hooks";
import TheBottomTabs from "../../components/TheBottomTabs";

type ExploreProps = {};

function Explore(props: ExploreProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="explore">
      Explore
      <TheBottomTabs />
    </div>
  );
}

export default Explore;
