import React from "react";

import Icon from "./../../shared/icon/Icon";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import Tags from "../tags/Tags";
import AddEventButton from "./../add-event-button/AddEventButton";
import eventImageDefault from "../../../assets/img/calendar-default.jpg";

import StyledEvent from "./Event-styles";

const Event = ({ event, addEventHandler, isCalendarEvent, isOwnEvent }) => {
  return (
    <StyledEvent onClick={e => e.stopPropagation()}>
      <div className="event-body">
        <h4>{event.title}</h4>
        {!isOwnEvent && (
          <AddEventButton
            handleClick={addEventHandler}
            isCalendarEvent={isCalendarEvent}
          />
        )}
        <p className="date">{event.date}</p>
        <p className="time">{event.time}</p>
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
