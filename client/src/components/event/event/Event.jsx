import React from "react";

import Icon from "./../../shared/icon/Icon";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import Tags from "../tags/Tags";
import AddEventButton from "./../add-event-button/AddEventButton";
import eventImageDefault from "../../../assets/img/calendar-default.jpg";

import StyledEvent from "./Event-styles";
import Button from "./../../shared/button/Button";
import { formatDate, formatHour } from "./../../../utilities/formaters";

const Event = ({ event, isCalendarEvent, isOwnEvent }) => {
  const date = formatDate(event.startDate);
  const hour = formatHour(event.startDate);

  return (
    <StyledEvent onClick={e => e.stopPropagation()}>
      <div className="event-body">
        {isOwnEvent ? (
          <div className="buttons">
            <Button text="Eliminar" size="sm" color="complementary" outline />
            <Button text="editar" size="sm" color="complementary" />
          </div>
        ) : (
          <AddEventButton
            eventId={event.id}
            isCalendarEvent={isCalendarEvent}
          />
        )}
        <h4>{event.title}</h4>
        <p className="date">{date}</p>
        <p className="time">{hour}</p>
        <p className="location">{event.location}</p>
        <div className="image">
          <img src={event.eventImg || eventImageDefault} alt={event.title} />
          <h6 className="price">${event.price}</h6>
          <Icon size="md" type="location" color="white" />
        </div>
        <div className="user-info">
          <Avatar
            src={event.User.avatarImg}
            name={event.User.userName}
            size="sm"
            text
          />
          <ViewsAndParticipants />
        </div>
        <p className="description">{event.description}</p>
        <Tags category={event.category} />
      </div>
    </StyledEvent>
  );
};

export default Event;
