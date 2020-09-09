import React from "react";
import PropTypes from "prop-types";

import CardImage from "./CardImage";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";

import StyledCard from "./EventCard-styles";

const mockEvent = {
  eventId: 1,
  eventImg:
    "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  date: "Mar 17 - Abr 5",
  EventTitle: "Concierto al Aire Libre",
  userImg:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  userName: "Jhon Doe",
  following: 120,
  followers: 68,
  views: 127,
  participants: 42,
};

const EventCard = ({ event }) => {
  const {
    id,
    img,
    title,
    date,
    authorImg,
    authorName,
    views,
    participants,
  } = event;

  return (
    <>
      <StyledCard>
        <CardImage img={img} date={date} title={title} />
        <div className="info">
          <Avatar src={authorImg} name={authorName} size="sm" text />
          <ViewsAndParticipants />
        </div>
      </StyledCard>
    </>
  );
};

EventCard.propTypes = {
  eventImg: PropTypes.string,
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventViews: PropTypes.number,
  eventParticipants: PropTypes.number,
  userImg: PropTypes.string,
  userName: PropTypes.string,
};

export default EventCard;
