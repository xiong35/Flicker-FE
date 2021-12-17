import "./index.scss";

import { useState } from "react";

import { Tab, Tabs } from "@mui/material";

import DeckCard from "../../components/DeckCard";
import Empty from "../../components/Empty";
import StarDeck from "../../components/StarDeck";
import TheBottomTabs from "../../components/TheBottomTabs";
import { useGetUserCollections } from "./hooks/useGetUserCollections";
import { useGetUserCreations } from "./hooks/useGetUserCreation";

type HomeProps = {};

enum TabID {
  "collection",
  "creation",
}

function Home(props: HomeProps) {
  const {} = props;
  const [selectTab, setSelectTab] = useState<TabID>(TabID.collection);
  const { creations } = useGetUserCreations();
  const { collections } = useGetUserCollections();

  return (
    <div className="home">
      <Tabs value={selectTab} className="home-tabs">
        <Tab label="我的收藏" onClick={() => setSelectTab(TabID.collection)} />
        <Tab label="我的创建" onClick={() => setSelectTab(TabID.creation)} />
      </Tabs>
      <div className="home-deck_container">
        {selectTab === TabID.creation &&
          (creations.length ? (
            creations.map((creation, i) => (
              <StarDeck
                deck={creation}
                key={creation.id}
                progress={~~(Math.random() * 100)}
              />
            ))
          ) : (
            <Empty />
          ))}
        {selectTab === TabID.collection &&
          (collections.length ? (
            collections.map((collection, i) => (
              <StarDeck
                deck={collection}
                key={collection.id}
                progress={~~(Math.random() * 100)}
              />
            ))
          ) : (
            <Empty />
          ))}
      </div>
      <TheBottomTabs />
    </div>
  );
}

export default Home;
