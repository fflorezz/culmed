import React from "react";
import StyledProfileRow from "./ProfileRow-styles";
import Avatar from "../avatar/Avatar";

import { Link } from "react-router-dom";
import FollowingButton from "../../shared/button/FollowingButton";

const ProfileRow = ({ id, isFollowing, isOwnProfile, userName, avatarImg }) => {
  return (
    <StyledProfileRow>
      <div className="row-avatar">
        <Link to={`/${id}`}>
          <Avatar
            src={avatarImg}
            name={userName}
            followers={20}
            size="lg"
            column
            text
          />
        </Link>
        {isOwnProfile ? null : (
          <FollowingButton isFollowing={isFollowing} followingId={id} />
        )}
      </div>
    </StyledProfileRow>
  );
};

export default ProfileRow;
