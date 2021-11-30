import "./index.scss";

import { Avatar, TextField } from "@mui/material";

import { useComments } from "./hooks/useComments";
import { CardID } from "../../../../models/card";
import Send from "../../../../imgComponents/Send";
import Discuss from "../../../../imgComponents/Discuss";

type CommentProps = {
  id: CardID;
};

export default function Comments(props: CommentProps) {
  const { id } = props;

  const { isUp, setIsUp } = useComments();

  return (
    <div
      className={`comments ${isUp ? "is-up" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="comments-wrap">
        <div className="comments-toggle" onClick={() => setIsUp((u) => !u)}>
          <Discuss className="comments-toggle-icon"></Discuss>
          <span>{isUp ? "收起" : "展开"}评论区</span>
        </div>

        <TextField
          label="写个评论吧"
          className="comments-input m"
          multiline={true}
          maxRows={5}
          InputProps={{
            endAdornment: <Send className="comments-input-icon" />,
          }}
        />
        <div className="comments-list">
          {Array.from({ length: 5 }, (_, index) => index).map(
            (comment, index) => (
              <div className="comments-list-comment" key={index}>
                <div className="comments-list-comment-user">
                  <Avatar
                    className="comments-list-comment-user-avatar"
                    src="https://flicker-static.hust.online/avater/0.svg"
                  />
                  <div className="comments-list-comment-user-name">王小明</div>
                  <div className="spacer"></div>
                  <div className="comments-list-comment-user-time">
                    2020/1/1
                  </div>
                </div>
                <div className="comments-list-comment-content">
                  说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
