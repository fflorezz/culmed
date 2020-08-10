import React from "react";

import StyledAvatar from "./Avatar-styles";
import Button from "./../button/Button";

const user = {
  id: 1,
  img:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Jhon Doe",
  following: 120,
  followers: 68,
};

const Avatar = ({
  src = user.img,
  name = user.name,
  following = user.following,
  followers = user.followers,
  size,
  column,
  followingBtn,
}) => {
  return (
    <StyledAvatar size={size} column={column} followingBtn>
      <img src={src} alt="" />
      <div className="text">
        <p className="name">{name}</p>
        <div className="follow">
          <p className="followers">
            Seguidores <span>{followers}</span>
          </p>
          <div className="spacer"></div>
          <p className="following">
            Siguiendo <span>{following}</span>
          </p>
        </div>
        {followingBtn && <Button size="sm" outline text="Following" />}
      </div>
    </StyledAvatar>
  );
};

export default Avatar;
