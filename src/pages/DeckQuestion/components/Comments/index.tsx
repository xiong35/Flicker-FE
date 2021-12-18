import "./index.scss";

import { useParams } from "react-router-dom";

import { Avatar, TextField } from "@mui/material";

import Empty from "../../../../components/Empty";
import Discuss from "../../../../imgComponents/Discuss";
import Like from "../../../../imgComponents/Like";
import Send from "../../../../imgComponents/Send";
import { CardID } from "../../../../models/card";
import { dateFormat } from "../../../../utils/dateFormat";
import CommentItem from "./components/CommentItem";
import { useAddComment } from "./hooks/useAddComment";
import { useComments } from "./hooks/useComments";

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
          className="comments-input m reset_mui_input_primary"
          multiline={true}
          maxRows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          InputProps={{
            endAdornment: (
              <Send onClick={addComment} className="comments-input-icon" />
            ),
          }}
        />
        <div className="comments-list">
          {comments
            .sort((c1, c2) => parseInt(c2.lastupdate) - parseInt(c1.lastupdate))
            .map((comment) => (
              <CommentItem comment={comment} key={comment.id}></CommentItem>
            ))}
          {comments.length === 0 && <Empty></Empty>}
        </div>
      </div>
    </div>
  );
}
