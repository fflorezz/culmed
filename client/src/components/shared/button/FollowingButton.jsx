import React, { useEffect, useState } from "react";
import StyledFollowingButton from "./FollowingButton-styles";
import { useDispatch } from "react-redux";
import { followUser } from "../../../redux/slices/session";
import { unfollowUser } from "./../../../redux/slices/session";

const FollowingButton = ({ isFollowing, followingId }) => {
  const dispatch = useDispatch();
  const [buttonText, setText] = useState("");

  useEffect(() => {
    setText(isFollowing ? "Siguiendo" : "Seguir");
  }, [isFollowing]);

  function handleMoueseEnter() {
    if (isFollowing) {
      setText("Dejar de Seguir");
    }
  }

  function handleMouseLeave() {
    if (isFollowing) {
      setText("Siguiendo");
    }
  }

  function handleClick() {
    dispatch(isFollowing ? unfollowUser(followingId) : followUser(followingId));
  }

  return (
    <StyledFollowingButton
      onMouseEnter={handleMoueseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {buttonText}
    </StyledFollowingButton>
  );
};

export default FollowingButton;
