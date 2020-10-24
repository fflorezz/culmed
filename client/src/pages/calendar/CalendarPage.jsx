import React, { useEffect } from "react";
import PageContainer from "../../components/shared/page-container/PageContainer";
import EventsList from "./../../components/event/event-list/EventsList";
import { useSelector, useDispatch } from "react-redux";
import NotFoundPage from "./../not-found/NotFoundPage";
import { fetchCalendar } from "../../redux/slices/calendar";
import { useParams } from "react-router";

const CalendarPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const session = useSelector(state => state.session);
  const { error, loading, events } = useSelector(state => state.calendar);
  let calendarEvents = session.id === userId ? session.calendar : events;

  useEffect(function () {
    dispatch(fetchCalendar(userId));
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <PageContainer>
        <NotFoundPage />
      </PageContainer>
    );
  }

  if (!loading && calendarEvents.length === 0) {
    return (
      <PageContainer>
        <h4>No hay eventos</h4>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <EventsList events={calendarEvents} avatar />
      )}
    </PageContainer>
  );
};

export default CalendarPage;
