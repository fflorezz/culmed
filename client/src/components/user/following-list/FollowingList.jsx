import React from "react";
import StyledFollowingList from "./FollowingList-styles";
import ProfileRow from "./../profile-row/ProfileRow";

const FollowingList = () => {
  return (
    <StyledFollowingList>
      <ProfileRow />
      <ProfileRow />
      <ProfileRow />
    </StyledFollowingList>
  );
};

export default FollowingList;
