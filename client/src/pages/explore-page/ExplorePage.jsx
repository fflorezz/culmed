import React from "react";
import EventCard from "./../../components/event/event-card/EventCard";
import StyledExplorePage from "./ExplorePage-styles";
import ExploreNav from "../../components/shared/nav/ExploreNav";

const ExplorePage = () => {
  return (
    <>
      <ExploreNav />
      <StyledExplorePage>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </StyledExplorePage>
    </>
  );
};

export default ExplorePage;
