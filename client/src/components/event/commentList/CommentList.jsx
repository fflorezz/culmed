import React from "react";
import Comment from "../comment/Comment";
import StyledCommentList from "./CommentList-styles";

const CommentList = ({ comments }) => {
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

export default CommentList;
{
}
