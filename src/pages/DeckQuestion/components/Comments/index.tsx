import "./index.scss";

import { Avatar, TextField } from "@mui/material";

import Send from "../../../../imgComponents/Send";

export default function Comments() {
  return (
    <div className="comments">
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
                <div className="comments-list-comment-user-time">2020/1/1</div>
              </div>
              <div className="comments-list-comment-content">
                说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对说得对
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
