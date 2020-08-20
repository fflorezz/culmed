import React from "react";
import StyledCommentField from "./CommentField-styles";
import Avatar from "./../../user/avatar/Avatar";
import Button from "./../../shared/button/Button";

const CommentField = () => {
  return (
    <StyledCommentField>
      <Avatar size="sm" />
      <form action="">
        <textarea name="comment" id="comment" cols="30" rows="3"></textarea>
        <Button color="gray" text="Comentar" outline />
      </form>
    </StyledCommentField>
  );
};

export default CommentField;
