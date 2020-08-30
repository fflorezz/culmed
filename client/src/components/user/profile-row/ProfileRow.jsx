import React from "react";
import StyledProfileRow from "./ProfileRow-styles";
import Avatar from "../avatar/Avatar";
import EventCard from "../../event/event-card/EventCard";
import Button from "./../../shared/button/Button";

const ProfileRow = () => {
  return (
    <StyledProfileRow>
      <div className="row-avatar">
        <Avatar size="lg" column text />
        <Button color="gray" text="Seguir" size="sm" outline />
      </div>
      <div className="row-events">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </StyledProfileRow>
  );
};

export default ProfileRow;
