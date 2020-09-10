import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllEvents } from "./../../redux/slices/events";

import EventCard from "./../../components/event/event-card/EventCard";
import ExploreNav from "../../components/shared/nav/ExploreNav";

import StyledExplorePage from "./ExplorePage-styles";

const ExplorePage = () => {
  const { events, error, loading } = useSelector(state => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllEvents());
    // eslint-disable-next-line
  }, []);

  function renderEvents() {
    if (loading) {
      return <h4>Loading...</h4>;
    } else if (error) {
      return <h4>{error.message}</h4>;
    } else if (!events || events.length === 0) {
      return <h4>No Hay Eventos</h4>;
    } else {
      return events.map(event => <EventCard key={event.id} {...event} />);
    }
  }

  return (
    <>
      <ExploreNav />
      <StyledExplorePage>{renderEvents()}</StyledExplorePage>
    </>
  );
};

export default ExplorePage;
