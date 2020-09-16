import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setExploreFilter } from "../../redux/slices/events";
import { useFetchEvents } from "./../../hooks/useFetchEvents";
import { filterEventsByTag } from "./../../utilities/filterEventsByTag";

import ExploreNav from "../../components/shared/nav/ExploreNav";
import EventsList from "../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";
import filterEventsById from "./../../utilities/filterEventsById";
import NotFoundPage from "./../not-found/NotFoundPage";

import StyledExplorePage from "./ExplorePage-styles";

const ExplorePage = () => {
  const { events, loading, error } = useFetchEvents();

  const filterOption = useSelector(state => state.events.exploreFilter);
  const userId = useSelector(state => state.session.id);
  const dispatch = useDispatch();

  const exploreEvents = userId ? filterEventsById(events, userId) : events;
  const filteredEvents = filterEventsByTag(exploreEvents, filterOption);

  // RESET FILTER
  useEffect(() => {
    return () => {
      dispatch(setExploreFilter("Todos"));
    };
    // eslint-disable-next-line
  }, []);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <StyledExplorePage>
      <ExploreNav />
      <PageContainer>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <EventsList events={filteredEvents} avatar />
        )}
      </PageContainer>
    </StyledExplorePage>
  );
};

export default ExplorePage;
