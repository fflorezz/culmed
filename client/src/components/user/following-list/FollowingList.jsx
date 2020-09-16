import React from "react";
import StyledFollowingList from "./FollowingList-styles";
import ProfileRow from "./../profile-row/ProfileRow";
import { useSelector } from "react-redux";

const FollowingList = () => {
  const followingIds = useSelector(state => state.user.following);
  const session = useSelector(state => state.session);

  if (followingIds.length === 0) {
    return <h4>No esta siguiendo</h4>;
  }

  return (
    <StyledFollowingList>
      {followingIds.map(id => {
        const isFollowing = session.following && session.following.includes(id);
        const isOwnProfile = session.id && session.id === id;
        return (
          <ProfileRow
            key={id}
            id={id}
            isFollowing={isFollowing}
            isOwnProfile={isOwnProfile}
          />
        );
      })}
    </StyledFollowingList>
  );
};

export default FollowingList;
