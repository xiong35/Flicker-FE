import './index.scss';

import { Button } from '@mui/material';

import TheBottomTabs from '../../components/TheBottomTabs';
import ArrowLeftP from '../../imgComponents/ArrowLeftP';
import Deck from '../../imgComponents/deck';
import NavHome from '../../imgComponents/NavHome';
import Record from '../../imgComponents/Record';
import Theme from '../../imgComponents/Theme';
import { useSetup } from './hooks';

type UserProps = {};

function User(props: UserProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="user">
      <NavHome className="user-avatar" />
      <div className="user-name">用户名</div>
      <div className="user-menu">
        <div className="user-menu-item">
          <Deck className="user-menu-item-icon scale-110" />
          我的题库
          <div className="spacer"></div>
          <ArrowLeftP className="user-menu-item-icon rotate arrow" />
        </div>
        <div className="user-menu-item">
          <Record className="user-menu-item-icon" />
          学习记录
          <div className="spacer"></div>
          <ArrowLeftP className="user-menu-item-icon rotate arrow" />
        </div>
        <div className="user-menu-item">
          <Theme className="user-menu-item-icon" />
          修改主题
          <div className="spacer"></div>
          <ArrowLeftP className="user-menu-item-icon rotate arrow" />
        </div>
      </div>
      <Button variant="outlined" className="user-logout">
        退出
      </Button>
      {/* <div className="user-logout">退出</div> */}
      <TheBottomTabs />
    </div>
  );
}

export default User;
