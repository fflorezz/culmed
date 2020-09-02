import React from "react";
import { useHistory } from "react-router";

import StyledEvent from "./Event-styles";
import testImg from "../../../assets/img/people-at-concert-1105666.jpg";
import Icon from "./../../shared/icon/Icon";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import Tags from "../tags/Tags";
import Comment from "../comment/Comment";
import CommentField from "../comment-field/CommentField";
import AddEventButton from "./../add-event-button/AddEventButton";
import Modal from "./../../shared/modal/Modal";

const Event = () => {
  let history = useHistory();

  return (
    <Modal handleClick={history.goBack}>
      <StyledEvent onClick={e => e.stopPropagation()}>
        <div className="event-body">
          <h4>Nombre del Evento</h4>
          <AddEventButton />
          <p className="date">Mar 7 - Abr 22</p>
          <p className="time">2:00PM - 3:00PM</p>
          <p className="location">CRA 23A 21A 15. Medellín - Colombia</p>
          <div className="image">
            <img src={testImg} alt="event-name" />
            <h6 className="price">$ Entrada Libre</h6>
            <Icon size="md" type="location" color="white" />
          </div>
          <div className="user-info">
            <Avatar size="sm" text />
            <ViewsAndParticipants />
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <Tags />
          <Comment />
          <CommentField />
        </div>
      </StyledEvent>
    </Modal>
  );
};

export default Event;
