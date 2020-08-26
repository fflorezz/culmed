import React from "react";
import StyledProfileRow from "./ProfileRow-styles";
import Avatar from "../avatar/Avatar";
import EventCard from "../../event/event-card/EventCard";

const ProfileRow = () => {
  return (
    <StyledProfileRow>
      <Avatar size="lg" column text />
      <EventCard />
      <EventCard />
      <EventCard />
    </StyledProfileRow>
  );
};

export default ProfileRow;
