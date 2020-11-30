import React, { memo } from "react";
import { useSelector } from "react-redux";
import Comment from "../comment/Comment";
import StyledCommentList from "./CommentList-styles";

const CommentList = () => {
  const comments = useSelector(state => state.events.comments);

  if (comments && comments.length === 0) {
    return null;
  }

  return (
    <StyledCommentList>
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </StyledCommentList>
  );
};

export default memo(CommentList);
