import React from "react";
import GridContainer from "../../shared/grid-container/GridContainer";
import EventCard from "../event-card/EventCard";

const EventsList = ({ events }) => {
  return (
    <GridContainer>
      {events.map(event => (
        <li key={event.id}>
          <EventCard {...event} />
        </li>
      ))}
    </GridContainer>
  );
};

export default EventsList;
