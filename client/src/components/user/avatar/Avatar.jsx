import React from "react";

import StyledAvatar from "./Avatar-styles";
import avatarImgDefault from "../../../assets/img/default-avatar.jpg";

const Avatar = ({
  src,
  name,
  following,
  followers,
  size,
  column,
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
      <img src={src || avatarImgDefault} alt="" />
      {text && (
        <div className="text">
          <p className="name">
            {name.length > 12 ? `${name.substring(0, 12)}...` : name}
          </p>
          <div className="follow">
            <p className="followers">
              Seguidores <span>{followers && followers.length}</span>
            </p>
            <div className="spacer"></div>
            <p className="following">
              Siguiendo <span>{following && following.length}</span>
            </p>
          </div>
        </div>
      )}
    </StyledAvatar>
  );
};

export default React.memo(Avatar);
