import React from "react";

import StyledMyCalendarPage from "./MyCalendarPage-styles";
import EventCard from "./../../components/event/event-card/EventCard";

const MyCalendarPage = () => {
  return (
    <StyledMyCalendarPage>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </StyledMyCalendarPage>
  );
};

export default MyCalendarPage;
