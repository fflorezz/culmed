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
  viewsCount,
  participantsCount,
  startDate,
  User: { userName, avatarImg },
}) => {
  return (
    <>
      <StyledCard>
        <CardImage
          eventImg={eventImg}
          date={date}
          title={title}
          id={id}
          startDate={startDate}
        />
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
          <ViewsAndParticipants
            views={viewsCount}
            participants={participantsCount}
          />
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
