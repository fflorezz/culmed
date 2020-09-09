import React from "react";
import PropTypes from "prop-types";

import CardImage from "./CardImage";
import Avatar from "./../../user/avatar/Avatar";
import ViewsAndParticipants from "./../../shared/views-and-participants/ViewsAndParticipants";
import StyledCard from "./EventCard-styles";

const EventCard = ({
  id,
  authorId,
  img,
  title,
  date,
  authorImg,
  authorName,
  views,
  participants,
}) => {
  return (
    <>
      <StyledCard>
        <CardImage img={img} date={date} title={title} eventId={id} />
        <div className="info">
          <Avatar
            src={authorImg}
            userId={authorId}
            name={authorName}
            size="sm"
            text
          />
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
