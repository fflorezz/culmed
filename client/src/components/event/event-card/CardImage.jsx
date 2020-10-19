import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import eventImageDefault from "../../../assets/img/calendar-default.jpg";

import StyledImage from "./CardImage-styles";

const CardImage = ({ eventImg = eventImageDefault, startDate, title, id }) => {
  let location = useLocation();

  const date = new Date(startDate).toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      to={{
        pathname: `/events/${id}`,
        state: { background: location },
      }}
    >
      <StyledImage>
        <img src={eventImg} alt="" />
        <div className="date-tag">
          <p>{date}</p>
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
      </StyledImage>
    </Link>
  );
};

CardImage.propTypes = {
  img: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default CardImage;
