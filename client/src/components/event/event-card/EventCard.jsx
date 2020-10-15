import React from "react";
import PropTypes from "prop-types";

import CardImage from "./CardImage";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import StyledCard from "./EventCard-styles";
import { Link } from "react-router-dom";

const EventCard = ({
  id,
  authorId,
  eventImg,
  title,
  date,
  avatarImg,
  userName,
  views,
  participants,
}) => {
  return (
    <>
      <StyledCard>
        <CardImage img={eventImg} date={date} title={title} id={id} />
        <div className="info">
          <Link to={`/${authorId}`}>
            <Avatar
              src={avatarImg}
              userId={authorId}
              name={userName}
              size="sm"
              text
            />
          </Link>
          <ViewsAndParticipants views={views} participants={participants} />
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
