import "./index.scss";

import { useState } from "react";

import { Tab, Tabs } from "@mui/material";

import DeckCard from "../../components/DeckCard";
import StarDeck from "../../components/StarDeck";
import TheBottomTabs from "../../components/TheBottomTabs";
import { useGetUserCreation } from "./hooks/useGetUserCreation";

type HomeProps = {};

enum TabID {
  "collection",
  "creation",
}

function Home(props: HomeProps) {
  const {} = props;
  const [selectTab, setSelectTab] = useState<TabID>(TabID.collection);
  const { creation } = useGetUserCreation();

  return (
    <div className="home">
      <Tabs value={selectTab} className="home-tabs">
        <Tab label="我的收藏" onClick={() => setSelectTab(TabID.collection)} />
        <Tab label="我的创建" onClick={() => setSelectTab(TabID.creation)} />
      </Tabs>
      <div className="home-deck_container">
        {(selectTab === TabID.collection
          ? Array.from({ length: 20 })
          : creation
        ).map((_, i) => (
          <StarDeck key={i} progress={~~(Math.random() * 100)} />
        ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Home;
