import "./index.scss";

import { useParams } from "react-router-dom";

import { Avatar, TextField } from "@mui/material";

import { useComments } from "./hooks/useComments";
import { useAddComment } from "./hooks/useAddComment";
import { dateFormat } from "../../../../utils/dateFormat";
import { CardID } from "../../../../models/card";
import Send from "../../../../imgComponents/Send";
import Discuss from "../../../../imgComponents/Discuss";
import Empty from "../../../../components/Empty";

type CommentProps = {
  id: CardID;
};

export default function Comments(props: CommentProps) {
  const { id } = props;

  const { deckID } = useParams<{ deckID: string }>();

  const { isUp, setIsUp, comments, addSelfComment } = useComments(id, deckID);
  const { addComment, comment, setComment } = useAddComment(
    id,
    deckID,
    addSelfComment
  );

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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          InputProps={{
            endAdornment: (
              <Send onClick={addComment} className="comments-input-icon" />
            ),
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") addComment();
          }}
        />
        <div className="comments-list">
          {comments
            .sort((c1, c2) => parseInt(c2.lastupdate) - parseInt(c1.lastupdate))
            .map((comment) => (
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
                  <div className="comments-list-comment-user-time">
                    {dateFormat(comment.lastupdate)}
                  </div>
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
