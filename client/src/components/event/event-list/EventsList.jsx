import React from "react";
import GridContainer from "../../shared/grid-container/GridContainer";
import EventCard from "../event-card/EventCard";
import CardImage from "./../event-card/CardImage";

const EventsList = ({ events, avatar }) => {
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
