import React from "react";

import { useFetchEvents } from "./../../hooks/useFetchEvents";

import ExploreNav from "../../components/shared/nav/ExploreNav";
import StyledExplorePage from "./ExplorePage-styles";
import EventsList from "../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";

const ExplorePage = () => {
  const { events, loading, error } = useFetchEvents();

  if (error) {
    return <h4>{error.message}</h4>;
  }

  return (
    <StyledExplorePage>
      <ExploreNav />
      <PageContainer>
        {loading ? <h4>Loading...</h4> : <EventsList events={events} />}
      </PageContainer>
    </StyledExplorePage>
  );
};

export default ExplorePage;
