import React, { useState } from "react";
import StyledCommentField from "./CommentField-styles";
import Avatar from "./../../user/avatar/Avatar";
import Button from "./../../shared/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../redux/slices/events";

const CommentField = ({ eventId }) => {
  const session = useSelector(state => state.session);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function updateText({ target }) {
    setText(target.value);
  }

  function onsubmit(e) {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    dispatch(addComment({ text, eventId, userId: session.id }));
    setText("");
  }

  return (
    <StyledCommentField>
      <Avatar size="sm" src={session.avatarImg} />
      <form action="">
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="2"
          onChange={updateText}
          value={text}
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
