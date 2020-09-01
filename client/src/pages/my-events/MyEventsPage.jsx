import React from "react";
import StyledMyEventsPage from "./MyEventPage-styles";
import CardImage from "./../../components/event/event-card/CardImage";

const MyEventsPage = () => {
  return (
    <StyledMyEventsPage>
      <CardImage />
      <CardImage />
      <CardImage />
    </StyledMyEventsPage>
  );
};

export default MyEventsPage;
