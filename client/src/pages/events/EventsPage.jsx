import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchEventsByAuthor } from "../../redux/slices/events";
import EventsList from "./../../components/event/event-list/EventsList";
import PageContainer from "./../../components/shared/page-container/PageContainer";
import NotFoundPage from "./../not-found/NotFoundPage";

const EventsPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const session = useSelector(state => state.session);
  const { error, loading, userEvents } = useSelector(state => state.events);
  let events = session.id === userId ? session.events : userEvents;

  useEffect(function () {
    dispatch(fetchEventsByAuthor(userId));
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <PageContainer>
        <NotFoundPage />
      </PageContainer>
    );
  }

  if (!loading && events.length === 0) {
    return (
      <PageContainer>
        <h4>No hay eventos</h4>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {loading ? <h4>Loading</h4> : <EventsList events={events} />}
    </PageContainer>
  );
};

export default EventsPage;
