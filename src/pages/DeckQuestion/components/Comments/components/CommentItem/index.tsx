import "./index.scss";

import { useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar } from "@mui/material";

import Like from "../../../../../../imgComponents/Like";
import { CardID } from "../../../../../../models/card";
import { Comment } from "../../../../../../models/comment";
import { setCommentLikeReq } from "../../../../../../network/card/setCommentLike";
import { dateFormat } from "../../../../../../utils/dateFormat";

type CommentItemProps = {
  comment: Comment;
  cardID: CardID;
};

function CommentItem(props: CommentItemProps) {
  const { comment, cardID } = props;
  const { deckID } = useParams<{ deckID: string }>();

  const [toggledLike, setToggledLike] = useState(false);
  async function toggleLiked() {
    setToggledLike((t) => !t);

    const success = await setCommentLikeReq({
      cardID,
      deckID,
      commentID: comment.id,
      liked: comment.liked !== toggledLike,
    });

    if (!success) setToggledLike((t) => !t);
  }

  return (
    <div className="comment_item">
      <div className="comment_item-header">
        <Avatar
          className="comment_item-header-avatar"
          src={comment.owner.avatar}
        />

        <div className="comment_item-header-info_wrap">
          <div className="comment_item-header-name">
            {comment.owner.username}
          </div>
          <div className="comment_item-header-time">
            {dateFormat(comment.lastupdate)}
          </div>
        </div>

        <div className="spacer"></div>
        <div className="comment_item-header-like" onClick={toggleLiked}>
          <Like
            liked={comment.liked !== toggledLike}
            className="comment_item-header-like-icon"
          ></Like>
          {toggledLike
            ? comment.liked
              ? comment.likes - 1
              : comment.likes + 1
            : comment.likes}
        </div>
      </div>
      <div className="comment_item-content">{comment.comment}</div>
    </div>
  );
}

export default CommentItem;
