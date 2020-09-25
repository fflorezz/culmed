import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import eventImageDefault from "../../../assets/img/calendar-default.jpg";

import StyledImage from "./CardImage-styles";

const CardImage = ({ img = eventImageDefault, date, title, id }) => {
  let location = useLocation();
  return (
    <Link
      to={{
        pathname: `/events/${id}`,
        state: { background: location },
      }}
    >
      <StyledImage>
        <img src={img} alt="" />
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
