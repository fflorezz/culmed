import React from "react";
import Comment from "../comment/Comment";

const CommentList = ({ comments }) => {
  console.log(comments);
  if (comments && comments.length === 0) {
    return null;
  }
  return (
    <div>
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
{
}
