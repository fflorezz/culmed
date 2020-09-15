import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchEventById } from "../../../redux/slices/events.js";

import Icon from "./../../shared/icon/Icon";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import Tags from "../tags/Tags";
import Comment from "../comment/Comment";
import CommentField from "../comment-field/CommentField";
import AddEventButton from "./../add-event-button/AddEventButton";
import Modal from "./../../shared/modal/Modal";

import StyledEvent from "./Event-styles";
import NotFoundPage from "./../../../pages/not-found/NotFoundPage";

const Event = () => {
  const history = useHistory();
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { event, error, loading } = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  }, [eventId, dispatch]);

  if (error) {
    return <NotFoundPage />;
  }

  if (!event) {
    return null;
  }

  return (
    <Modal handleClick={history.goBack}>
      <StyledEvent onClick={e => e.stopPropagation()}>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <div className="event-body">
            <h4>{event.title}</h4>
            <AddEventButton />
            <p className="date">{event.date}</p>
            <p className="time">{event.time}</p>
            <p className="location">{event.location}</p>
            <div className="image">
              <img src={event.img} alt={event.title} />
              <h6 className="price">${event.price}</h6>
              <Icon size="md" type="location" color="white" />
            </div>
            <div className="user-info">
              <Avatar
                src={event.authorImg}
                name={event.authorName}
                size="sm"
                text
              />
              <ViewsAndParticipants />
            </div>
            <p className="description">{event.description}</p>
            <Tags tags={event.tags} />
            <Comment />
            <CommentField />
          </div>
        )}
      </StyledEvent>
    </Modal>
  );
};

export default Event;
