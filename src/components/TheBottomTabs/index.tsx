import "./index.scss";

import { useSetup } from "./hooks";
import userIcon from "../../assets/img/nav-user.svg";
import homeIcon from "../../assets/img/nav-home.svg";
import exploreIcon from "../../assets/img/nav-explore.svg";

type TheBottomTabsProps = {};

function TheBottomTabs(props: TheBottomTabsProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <>
      <div className="the_bottom_tabs">
        <div className="the_bottom_tabs-tab">
          <img src={homeIcon} alt="" className="the_bottom_tabs-tab-icon" />
          <span className="the_bottom_tabs-tab-text">首页</span>
        </div>
        <div className="the_bottom_tabs-tab">
          <img src={exploreIcon} alt="" className="the_bottom_tabs-tab-icon" />
          <span className="the_bottom_tabs-tab-text">发现</span>
        </div>
        <div className="the_bottom_tabs-tab">
          <img src={userIcon} alt="" className="the_bottom_tabs-tab-icon" />
          <span className="the_bottom_tabs-tab-text">用户</span>
        </div>
      </div>
      <div className="the_bottom_tabs-spacer"></div>
    </>
  );
}

export default TheBottomTabs;
