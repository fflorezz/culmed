import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import StyledEvent from "./Event-styles";
import Icon from "./../../shared/icon/Icon";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import Tags from "../tags/Tags";
import Comment from "../comment/Comment";
import CommentField from "../comment-field/CommentField";
import AddEventButton from "./../add-event-button/AddEventButton";
import Modal from "./../../shared/modal/Modal";
import { getEventById } from "../../../API/events";

const Event = () => {
  const history = useHistory();
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function getEventAsync() {
      const data = await getEventById(eventId);
      setEvent(data);
    }
    getEventAsync();
  }, [eventId]);

  return (
    <Modal handleClick={history.goBack}>
      <StyledEvent onClick={e => e.stopPropagation()}>
        <div className="event-body">
          <h4>{event.title}</h4>
          <AddEventButton />
          <p className="date">{event.date}</p>
          <p className="time">{event.time}</p>
          <p className="location">{event.location}</p>
          <div className="image">
            <img src={event.img} alt={event.title} />
            <h6 className="price">{event.price}</h6>
            <Icon size="md" type="location" color="white" />
          </div>
          <div className="user-info">
            <Avatar src={event.authorImg} size="sm" text />
            <ViewsAndParticipants />
          </div>
          <p className="description">{event.description}</p>
          <Tags tags={event.tags} />
          <Comment />
          <CommentField />
        </div>
      </StyledEvent>
    </Modal>
  );
};

export default Event;
