import React from "react";

import EventCard from "./../../components/event/event-card/EventCard";
import ExploreNav from "../../components/shared/nav/ExploreNav";

import StyledExplorePage from "./ExplorePage-styles";
import { useFetchEvents } from "./../../hooks/useFetchEvents";

const ExplorePage = () => {
  const { events, loading, error } = useFetchEvents();

  function renderEvents() {
    if (loading) {
      return <h4>Loading...</h4>;
    }

    if (error) {
      return <h4>{error.message}</h4>;
    }

    if (!events || events.length === 0) {
      return <h4>No Hay Eventos</h4>;
    }

    return events.map(event => <EventCard key={event.id} {...event} />);
  }

  return (
    <>
      <ExploreNav />
      <StyledExplorePage>{renderEvents()}</StyledExplorePage>
    </>
  );
};

export default ExplorePage;
