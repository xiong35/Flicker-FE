import "./index.scss";

import { Button, TextField } from "@mui/material";

import TheBottomTabs from "../../components/TheBottomTabs";
import { useSelf } from "../../context/Self/useSelf";
import ArrowLeftP from "../../imgComponents/ArrowLeftP";
import CheckMark from "../../imgComponents/CheckMark";
import Deck from "../../imgComponents/Deck";
import NavHome from "../../imgComponents/NavHome";
import Record from "../../imgComponents/Record";
import Theme from "../../imgComponents/Theme";
import UserEdit from "../../imgComponents/UserEdit";
import { useEditName } from "./hooks/useEditName";
import { uploadAvatar } from "./utils/uploadAvatar";

type UserProps = {};

function User(props: UserProps) {
  const {} = props;

  const { self, setSelf } = useSelf();

  const { isEditing, newName, startEditing, finishEditing, setNewName } =
    useEditName();

  return (
    <div className="user">
      <img
        src={self.avatar || "https://flicker-static.hust.online/avater/4.svg"}
        className="user-avatar"
        alt="头像"
        onClick={() =>
          uploadAvatar().then((avatar) => avatar && setSelf({ avatar }))
        }
      />
      <div className="user-name">
        {isEditing ? (
          <TextField
            className="user-name-input m"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              finishEditing();
            }}
            onClick={(e) => e.stopPropagation()}
            autoFocus
            InputProps={{
              endAdornment: (
                <CheckMark
                  onClick={finishEditing}
                  className="user-name-input-finish_icon"
                ></CheckMark>
              ),
            }}
          ></TextField>
        ) : (
          <>
            <div className="user-name-text">{self.username}</div>
            <UserEdit
              className="user-name-icon"
              onClick={startEditing}
            ></UserEdit>
          </>
        )}
      </div>

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
      <div className="user-menu">
        <div className="user-menu-item">
          <Deck className="user-menu-item-icon scale-110" />
          清除本地学习记录
          <div className="spacer"></div>
        </div>
        <div className="user-menu-item">
          <Record className="user-menu-item-icon" />
          同步本地记录到云端
          <div className="spacer"></div>
        </div>
      </div>
      <Button variant="contained" className="user-logout" color="error">
        退出
      </Button>
      {/* <div className="user-logout">退出</div> */}
      <TheBottomTabs />
    </div>
  );
}

export default User;
