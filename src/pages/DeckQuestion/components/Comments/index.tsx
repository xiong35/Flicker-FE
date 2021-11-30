import "./index.scss";

import { Avatar, TextField } from "@mui/material";

import { useComments } from "./hooks/useComments";
import { CardID } from "../../../../models/card";
import Send from "../../../../imgComponents/Send";
import Discuss from "../../../../imgComponents/Discuss";
import Empty from "../../../../components/Empty";

type CommentProps = {
  id: CardID;
};

export default function Comments(props: CommentProps) {
  const { id } = props;

  const { isUp, setIsUp, comments } = useComments(id);

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
          {comments.map((comment) => (
            <div className="comments-list-comment" key={comment.id}>
              <div className="comments-list-comment-user">
                <Avatar
                  className="comments-list-comment-user-avatar"
                  src={comment.owner.avatar}
                />
                <div className="comments-list-comment-user-name">
                  {comment.owner.username}
                </div>
                <div className="spacer"></div>
                <div className="comments-list-comment-user-time">2020/1/1</div>
              </div>
              <div className="comments-list-comment-content">
                {comment.comment}
              </div>
            </div>
          ))}
          {comments.length === 0 && <Empty></Empty>}
        </div>
      </div>
    </div>
  );
}
