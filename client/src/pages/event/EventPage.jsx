import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventById } from "./../../redux/slices/events";

import Modal from "./../../components/shared/modal/Modal";
import Event from "./../../components/event/event/Event";
import NotFoundPage from "./../not-found/NotFoundPage";

const EventPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { event, error, loading } = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  }, [eventId, dispatch]);

  function addEventHandler() {
    console.log("Added event with id: ", event.id);
  }

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
        <Event event={event} addEventHandler={addEventHandler} />
      )}
    </Modal>
  );
};

export default EventPage;
