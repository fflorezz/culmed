import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchEventsByAuthor } from "../../redux/slices/events";
import EventsList from "./../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";

const EventsPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const events = useSelector(state => state.events.userEvents);

  useEffect(function () {
    dispatch(fetchEventsByAuthor(userId));
    // eslint-disable-next-line
  }, []);

  if (events.length === 0) {
    return (
      <PageContainer>
        <h4>No hay eventos</h4>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <EventsList events={events} />
    </PageContainer>
  );
};

export default EventsPage;
