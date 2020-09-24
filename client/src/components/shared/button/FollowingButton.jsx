import React, { useEffect, useState } from "react";
import StyledFollowingButton from "./FollowingButton-styles";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../../redux/slices/session";
import { unfollowUser } from "./../../../redux/slices/session";

const FollowingButton = ({ isFollowing, followId }) => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.id);
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
    dispatch(
      isFollowing
        ? unfollowUser({ userId, followId })
        : followUser({ userId, followId })
    );
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
