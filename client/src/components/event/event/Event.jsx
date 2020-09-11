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

const Event = () => {
  const history = useHistory();
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { event, error, loading } = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEventById(eventId === undefined ? "notfound" : eventId));
  }, [eventId, dispatch]);

  function renderEvent() {
    if (loading) {
      return <h4>Loading...</h4>;
    }

    if (error) {
      history.replace("notfound");
    }

    if (event) {
      const {
        img,
        date,
        time,
        location,
        title,
        price,
        authorImg,
        authorName,
        description,
        tags,
      } = event;
      return (
        <div className="event-body">
          <h4>{title}</h4>
          <AddEventButton />
          <p className="date">{date}</p>
          <p className="time">{time}</p>
          <p className="location">{location}</p>
          <div className="image">
            <img src={img} alt={title} />
            <h6 className="price">${price}</h6>
            <Icon size="md" type="location" color="white" />
          </div>
          <div className="user-info">
            <Avatar src={authorImg} name={authorName} size="sm" text />
            <ViewsAndParticipants />
          </div>
          <p className="description">{description}</p>
          <Tags tags={tags} />
          <Comment />
          <CommentField />
        </div>
      );
    }
  }

  return (
    <Modal handleClick={history.goBack}>
      <StyledEvent onClick={e => e.stopPropagation()}>
        {renderEvent()}
      </StyledEvent>
    </Modal>
  );
};

export default Event;
