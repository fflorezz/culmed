import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setExploreFilter } from "../../redux/slices/events";
import { useFetchEvents } from "./../../hooks/useFetchEvents";
import { filterEventsById, filterEventsByTag } from "../../utilities/filters";

import ExploreNav from "../../components/shared/nav/ExploreNav";
import EventsList from "../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";
import NotFoundPage from "./../not-found/NotFoundPage";

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
  }, [dispatch]);

  if (!loading && filteredEvents.length === 0) {
    return (
      <>
        <ExploreNav />
        <PageContainer>
          <h4>No hay eventos</h4>
        </PageContainer>
      </>
    );
  }

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ExploreNav />
      <PageContainer>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <EventsList events={filteredEvents} avatar />
        )}
      </PageContainer>
    </>
  );
};

export default ExplorePage;
