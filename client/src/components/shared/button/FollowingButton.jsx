import React, { useState } from "react";
import StyledFollowingButton from "./FollowingButton-styles";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../../redux/slices/session";

const FollowingButton = ({ isFollowing, followId }) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.id);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const [buttonText, setText] = useState(text);

  function handleMoueseEnter() {
    if (isFollowing) {
      setText("Dejar de Seguir");
    }
  }

  function handleMouseLeave() {
    if (isFollowing) {
      setText(text);
    }
  }

  function handleClick() {
    dispatch(followUser({ userId, followId }));
  }

  return (
    <StyledFollowingButton
      onMouseEnter={handleMoueseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {console.log(isFollowing)}
      {buttonText}
    </StyledFollowingButton>
  );
};

export default FollowingButton;
