import React, { useState } from "react";
import StyledCommentField from "./CommentField-styles";
import Avatar from "./../../user/avatar/Avatar";
import Button from "./../../shared/button/Button";

const CommentField = ({ sessionAvatar }) => {
  const [text, setText] = useState("");

  function updateText({ target }) {
    setText(target.value);
  }

  function onsubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    console.log(text);
  }

  return (
    <StyledCommentField>
      <Avatar size="sm" src={sessionAvatar} />
      <form action="">
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="2"
          onChange={updateText}
        ></textarea>
        <Button
          size="sm"
          color="gray"
          text="Comentar"
          outline
          handleClick={onsubmit}
        />
      </form>
    </StyledCommentField>
  );
};

export default CommentField;
