import React from "react";
import PageContainer from "../../components/shared/page-container/PageContainer";
import EventsList from "./../../components/event/event-list/EventsList";
import { useFetchEvents } from "./../../hooks/useFetchEvents";
import { useSelector } from "react-redux";
import NotFoundPage from "./../not-found/NotFoundPage";

const CalendarPage = () => {
  const { events, loading, error } = useFetchEvents();
  const calendarIds = useSelector(state => state.user.calendar);
  const calendarEvents = events.filter(event => calendarIds.includes(event.id));

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
    <>
      <PageContainer>
        {loading ? (
          <h4>Loading</h4>
        ) : (
          <EventsList events={calendarEvents} avatar />
        )}
      </PageContainer>
    </>
  );
};

export default CalendarPage;
