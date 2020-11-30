import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "./../../redux/slices/event";

import Modal from "./../../components/shared/modal/Modal";
import Event from "./../../components/event/event/Event";

const EventPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { event, error, loading } = useSelector(state => state.event);
  const session = useSelector(state => state.session);
  const isCalendarEvent = session.calendar.some(
    e => e.id === parseInt(eventId)
  );

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  }, [eventId, dispatch]);

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
          isCalendarEvent={isCalendarEvent}
          isOwnEvent={event.authorId === session.id}
          isLogin={session.isLogin}
        />
      )}
    </Modal>
  );
};

export default EventPage;
