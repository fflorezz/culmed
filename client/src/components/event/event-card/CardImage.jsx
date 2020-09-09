import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import StyledImage from "./CardImage-styles";

const mockData = {
  img:
    "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  date: "Mar 17 - Abr 5",
  title: "Concierto al Aire Libre",
};

const CardImage = ({ img, date, title }) => {
  let location = useLocation();
  return (
    <Link
      to={{
        pathname: `/events/:eventId`,
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
