import './index.scss';

import { useHistory } from 'react-router-dom';

import NavExplore from '../../imgComponents/NavExplore';
import NavHome from '../../imgComponents/NavHome';
import NavUser from '../../imgComponents/NavUser';
import { useSetup } from './hooks';

type TheBottomTabsProps = {};

function TheBottomTabs(props: TheBottomTabsProps) {
  const {} = props;
  const { activePath } = useSetup();

  const history = useHistory();

  return (
    <>
      <div className="the_bottom_tabs">
        <div
          className={`the_bottom_tabs-tab ${
            activePath === "/home" ? "active" : ""
          }`}
          onClick={() => history.push("/")}
        >
          <NavHome className="the_bottom_tabs-tab-icon" />
          <span className="the_bottom_tabs-tab-text">首页</span>
        </div>
        <div
          className={`the_bottom_tabs-tab ${
            activePath === "/explore" ? "active" : ""
          }`}
          onClick={() => history.push("/explore")}
        >
          <NavExplore className="the_bottom_tabs-tab-icon" />
          <span className="the_bottom_tabs-tab-text">发现</span>
        </div>
        <div
          className={`the_bottom_tabs-tab ${
            activePath === "/user" ? "active" : ""
          }`}
          onClick={() => history.push("/user")}
        >
          <NavUser className="the_bottom_tabs-tab-icon" />
          <span className="the_bottom_tabs-tab-text">用户</span>
        </div>
      </div>
      <div className="the_bottom_tabs-spacer"></div>
    </>
  );
}

export default TheBottomTabs;
