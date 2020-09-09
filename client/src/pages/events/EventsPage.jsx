import React from "react";
import StyledEventsPage from "./EventPage-styles";
import CardImage from "../../components/event/event-card/CardImage";

const EventsPage = () => {
  return (
    <StyledEventsPage>
      <CardImage />
      <CardImage />
      <CardImage />
    </StyledEventsPage>
  );
};

export default EventsPage;
