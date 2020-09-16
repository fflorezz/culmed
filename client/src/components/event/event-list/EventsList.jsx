import React from "react";
import GridContainer from "../../shared/grid-container/GridContainer";
import EventCard from "../event-card/EventCard";
import CardImage from "./../event-card/CardImage";

const EventsList = ({ events, avatar }) => {
  if (events.length === 0) {
    return <h4>No hay eventos</h4>;
  }

  return (
    <GridContainer>
      {events.map(event => (
        <li key={event.id}>
          {avatar ? <EventCard {...event} /> : <CardImage {...event} />}
        </li>
      ))}
    </GridContainer>
  );
};

export default EventsList;
