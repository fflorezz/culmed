import React from "react";
import StyledImage from "./CardImage-styles";

const mockData = {
  img:
    "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  date: "Mar 17 - Abr 5",
  title: "Concierto al Aire Libre",
};

const CardImage = ({
  img = mockData.img,
  date = mockData.date,
  title = mockData.title,
}) => {
  return (
    <StyledImage>
      <img src={img} alt="" />
      <div className="date-tag">
        <p>{date}</p>
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
    </StyledImage>
  );
};

export default CardImage;
