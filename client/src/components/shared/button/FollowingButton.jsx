import React, { useState } from "react";
import StyledFollowingButton from "./FollowingButton-styles";

const FollowingButton = ({ isFollowing }) => {
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

  return (
    <StyledFollowingButton
      onMouseEnter={handleMoueseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </StyledFollowingButton>
  );
};

export default FollowingButton;
