import React, { memo } from "react";
import { useSelector } from "react-redux";
import Comment from "../comment/Comment";
import StyledCommentList from "./CommentList-styles";

const CommentList = () => {
  const comments = useSelector(state => state.event.comments);
  const sessionId = useSelector(state => state.session.id);

  if (comments && comments.length === 0) {
    return null;
  }

  return (
    <StyledCommentList>
      {comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            isOwnComment={sessionId === comment.userId}
          />
        );
      })}
    </StyledCommentList>
  );
};

export default memo(CommentList);
