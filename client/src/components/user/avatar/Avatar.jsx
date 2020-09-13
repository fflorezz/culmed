import React from "react";

import StyledAvatar from "./Avatar-styles";
import Button from "./../../shared/button/Button";

const user = {
  id: 1,
  img:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Jhon Doe",
  following: 120,
  followers: [1, 2, 3, 4],
};

const Avatar = ({
  src = user.img,
  name = user.name,
  following = user.following,
  followers = user.followers,
  size,
  column,
  followingBtn,
  isFollowing,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  text,
}) => {
  return (
    <StyledAvatar
      size={size}
      column={column}
      followingBtn
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="" />
      {text && (
        <div className="text">
          <p className="name">{name}</p>
          <div className="follow">
            <p className="followers">
              Seguidores <span>{followers && followers.length}</span>
            </p>
            <div className="spacer"></div>
            <p className="following">
              Siguiendo <span>{following && following.length}</span>
            </p>
          </div>
          {followingBtn && (
            <Button
              color="gray"
              text={isFollowing ? "Siguiendo" : "Seguir"}
              hoverText={isFollowing ? "Dejar de Seguir" : "Seguir"}
              size="sm"
              outline
            />
          )}
        </div>
      )}
    </StyledAvatar>
  );
};

export default Avatar;
