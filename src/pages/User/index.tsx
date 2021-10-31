import "./index.scss";

import { useSetup } from "./hooks";
import TheBottomTabs from "../../components/TheBottomTabs";
import avatar from "../../assets/img/nav-home.svg";

type UserProps = {};

function User(props: UserProps) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="user">
      <img src={avatar} alt="" className="user-avatar" />
      <div className="user-name">用户名</div>
      <div className="user-menu">
        <div className="user-menu-item user-deck_count">题库数: 123</div>
        <div className="user-menu-item user-study_count">学习题目: 123123</div>
        <div className="user-menu-item user-comment_count">评论数: 123</div>
      </div>
      <div className="user-logout">退出</div>
      <TheBottomTabs />
    </div>
  );
}

export default User;
