import "./index.scss";

import { Avatar } from "@mui/material";

import Like from "../../../../../../imgComponents/Like";
import { Comment } from "../../../../../../models/comment";
import { dateFormat } from "../../../../../../utils/dateFormat";

type CommentItemProps = {
  comment: Comment;
};

function CommentItem(props: CommentItemProps) {
  const { comment } = props;

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
        <div className="comment_item-header-like">
          <Like liked={true} className="comment_item-header-like-icon"></Like>
          123
        </div>
      </div>
      <div className="comment_item-content">{comment.comment}</div>
    </div>
  );
}

export default CommentItem;
