import React, { useEffect } from "react";
import PageContainer from "../../components/shared/page-container/PageContainer";
import EventsList from "./../../components/event/event-list/EventsList";
import { useSelector, useDispatch } from "react-redux";
import NotFoundPage from "./../not-found/NotFoundPage";
import { fetchCalendar } from "../../redux/slices/calendar";

const CalendarPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { error, loading, events } = useSelector(state => state.calendar);

  useEffect(function () {
    if (user.id) {
      dispatch(fetchCalendar(user.id));
    }
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
      {loading ? <h4>Loading</h4> : <EventsList events={events} avatar />}
    </PageContainer>
  );
};

export default CalendarPage;
