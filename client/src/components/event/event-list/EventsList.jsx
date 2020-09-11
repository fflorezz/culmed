import React from "react";
import GridContainer from "../../shared/grid-container/GridContainer";
import EventCard from "../event-card/EventCard";
import StyledEventsList from "./EventsList-styles";

const EventsList = ({ events }) => {
  return (
    <StyledEventsList>
      <GridContainer>
        {events.map(event => (
          <li key={event.id}>
            <EventCard {...event} />
          </li>
        ))}
      </GridContainer>
    </StyledEventsList>
  );
};

export default EventsList;
