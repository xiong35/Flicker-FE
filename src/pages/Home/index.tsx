import "./index.scss";

import { useState } from "react";

import { Tab, Tabs } from "@mui/material";

import { useGetUserCreations } from "./hooks/useGetUserCreation";
import TheBottomTabs from "../../components/TheBottomTabs";
import StarDeck from "../../components/StarDeck";
import DeckCard from "../../components/DeckCard";

type HomeProps = {};

enum TabID {
  "collection",
  "creation",
}

function Home(props: HomeProps) {
  const {} = props;
  const [selectTab, setSelectTab] = useState<TabID>(TabID.collection);
  const { creations } = useGetUserCreations();

  return (
    <div className="home">
      <Tabs value={selectTab} className="home-tabs">
        <Tab label="我的收藏" onClick={() => setSelectTab(TabID.collection)} />
        <Tab label="我的创建" onClick={() => setSelectTab(TabID.creation)} />
      </Tabs>
      <div className="home-deck_container">
        {selectTab === TabID.creation &&
          creations.map((creation, i) => (
            <StarDeck
              deck={creation}
              key={creation.id}
              progress={~~(Math.random() * 100)}
            />
          ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Home;
