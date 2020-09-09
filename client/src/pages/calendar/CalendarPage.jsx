import React from "react";

import StyledCalendarPage from "./CalendarPage-styles";
import EventCard from "../../components/event/event-card/EventCard";

const CalendarPage = () => {
  return (
    <StyledCalendarPage>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </StyledCalendarPage>
  );
};

export default CalendarPage;
