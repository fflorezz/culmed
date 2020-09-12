import React from "react";
import StyledProfileRow from "./ProfileRow-styles";
import Avatar from "../avatar/Avatar";
import Button from "./../../shared/button/Button";
import CardImage from "./../../event/event-card/CardImage";

const ProfileRow = () => {
  return (
    <StyledProfileRow>
      <div className="row-avatar">
        <Avatar size="lg" column text followingBtn />
      </div>
      <div className="row-events">
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
      </div>
    </StyledProfileRow>
  );
};

export default ProfileRow;
