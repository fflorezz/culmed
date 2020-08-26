import React from "react";
import EventCard from "./../../components/event/event-card/EventCard";
import StyledExplorePage from "./ExplorePage-styles";

const ExplorePage = () => {
  return (
    <StyledExplorePage>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </StyledExplorePage>
  );
};

export default ExplorePage;
