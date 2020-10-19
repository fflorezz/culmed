import React from "react";
import StyledFollowingList from "./FollowingList-styles";
import ProfileRow from "./../profile-row/ProfileRow";
import { useSelector } from "react-redux";

const FollowingList = () => {
  const user = useSelector(state => state.user);
  const session = useSelector(state => state.session);
  const following = session.id === user.id ? session.following : user.following;

  if (following.length === 0) {
    return <h4>No esta siguiendo</h4>;
  }

  return (
    <StyledFollowingList>
      {following.map(user => {
        const isFollowing = session.following.some(u => u.id === user.id);
        const isOwnProfile = session.id && session.id === user.id;
        return (
          <ProfileRow
            key={user.id}
            id={user.id}
            avatarImg={user.avatarImg}
            userName={user.userName}
            isFollowing={isFollowing}
            isOwnProfile={isOwnProfile}
          />
        );
      })}
    </StyledFollowingList>
  );
};

export default FollowingList;
