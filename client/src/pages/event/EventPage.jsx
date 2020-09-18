import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "./../../redux/slices/events";

import Modal from "./../../components/shared/modal/Modal";
import Event from "./../../components/event/event/Event";
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
  const isOwnEvent = session.events.includes(parseInt(eventId));

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
  }

  if (error) {
    return history.push("404");
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
          isOwnEvent={isOwnEvent}
        />
      )}
    </Modal>
  );
};

export default EventPage;
