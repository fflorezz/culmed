import React from "react";
import StyledFollowingPage from "./FollowingPage-styles";
import FollowingList from "./../../components/user/following-list/FollowingList";

const FollowingPage = () => {
  return (
    <StyledFollowingPage>
      <FollowingList />
    </StyledFollowingPage>
  );
};

export default FollowingPage;
