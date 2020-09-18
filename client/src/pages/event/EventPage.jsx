import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "./../../redux/slices/events";

import Modal from "./../../components/shared/modal/Modal";
import Event from "./../../components/event/event/Event";
import NotFoundPage from "./../not-found/NotFoundPage";
import {
  addEventToCalendar,
  removeEventFromCalendar,
} from "../../redux/slices/session.js";

const EventPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { event, error, loading } = useSelector(state => state.events);
  const session = useSelector(state => state.session);
  const isCalendarEvent = session.calendar.includes(parseInt(eventId));
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  }, [eventId, dispatch]);

  function addEventHandler() {
    dispatch(
      addEventToCalendar({ userId: session.id, eventId: parseInt(eventId) })
    );
  }

  function removeEventHandler() {
    dispatch(
      removeEventFromCalendar({
        userId: session.id,
        eventId: parseInt(eventId),
      })
    );
    setRemoved(true);
  }

  // REFRESH HISTORY
  useEffect(() => {
    if (removed) {
      return () => {
        history.go(0);
      };
    } // eslint-disable-next-line
  }, [removed]);

  if (error) {
    return <NotFoundPage />;
  }

  if (!event) {
    return null;
  }

  return (
    <Modal handleClick={history.goBack}>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <Event
          event={event}
          addEventHandler={
            isCalendarEvent ? removeEventHandler : addEventHandler
          }
          isCalendarEvent={isCalendarEvent}
        />
      )}
    </Modal>
  );
};

export default EventPage;
