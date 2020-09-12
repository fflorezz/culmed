import React from "react";

import { useFetchEvents } from "./../../hooks/useFetchEvents";

import ExploreNav from "../../components/shared/nav/ExploreNav";
import StyledExplorePage from "./ExplorePage-styles";
import EventsList from "../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";
import filterEvents from "./../../utilities/filterEvents";
import { useSelector } from "react-redux";

const ExplorePage = () => {
  const { events, loading, error } = useFetchEvents();
  const userId = useSelector(state => state.session.id);
  let exploreEvents = events;

  if (userId) {
    exploreEvents = filterEvents({
      events,
      property: "authorId",
      value: userId,
      equal: false,
    });
  }

  if (error) {
    return <h4>{error.message}</h4>;
  }

  return (
    <StyledExplorePage>
      <ExploreNav />
      <PageContainer>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <EventsList events={exploreEvents} avatar />
        )}
      </PageContainer>
    </StyledExplorePage>
  );
};

export default ExplorePage;
