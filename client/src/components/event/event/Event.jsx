import React, { useState } from "react";

import Icon from "./../../shared/icon/Icon";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import Tags from "../tags/Tags";
import AddEventButton from "./../add-event-button/AddEventButton";
import eventImageDefault from "../../../assets/img/calendar-default.jpg";

import StyledEvent from "./Event-styles";
import Button from "./../../shared/button/Button";
import { formatDate, formatHour } from "./../../../utilities/formaters";
import DeleteModal from "../delete-modal/DeleteModal";
import EditForm from "./../edit-form/EditForm";

const Event = ({ event, isCalendarEvent, isOwnEvent }) => {
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [showEditForm, setEditForm] = useState(false);
  const date = formatDate(event.startDate);
  const hour = formatHour(event.startDate);

  function toggleDeleteModal(option) {
    setDeleteModal(option);
  }

  function toggleEditForm(option) {
    setEditForm(option);
  }

  if (showEditForm) {
    return <EditForm toggleEditForm={toggleEditForm} event={event} />;
  }

  return (
    <StyledEvent onClick={e => e.stopPropagation()}>
      <div className="event-body">
        {isOwnEvent ? (
          <div className="buttons">
            <Button
              text="Eliminar"
              size="sm"
              color="complementary"
              outline
              handleClick={() => {
                toggleDeleteModal(true);
              }}
            />
            <Button
              text="Editar"
              size="sm"
              color="complementary"
              handleClick={() => {
                toggleEditForm(true);
              }}
            />
          </div>
        ) : (
          <AddEventButton
            eventId={event.id}
            isCalendarEvent={isCalendarEvent}
          />
        )}
        {showDeleteModal && (
          <DeleteModal showModal={toggleDeleteModal} eventId={event.id} />
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
          <ViewsAndParticipants
            participants={event.participantsCount}
            views={event.viewsCount}
          />
        </div>
        <p className="description">{event.description}</p>
        <Tags category={event.category} />
      </div>
    </StyledEvent>
  );
};

export default Event;
