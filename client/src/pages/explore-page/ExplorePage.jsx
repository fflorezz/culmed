import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllEvents } from "./../../redux/slices/events";

import EventCard from "./../../components/event/event-card/EventCard";
import ExploreNav from "../../components/shared/nav/ExploreNav";

import StyledExplorePage from "./ExplorePage-styles";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.all);

  useEffect(() => {
    dispatch(fetchAllEvents());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ExploreNav />
      <StyledExplorePage>
        {events.map(event => (
          <EventCard event={event} />
        ))}
      </StyledExplorePage>
    </>
  );
};

export default ExplorePage;
