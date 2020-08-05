import React from "react";
import StyledViews from "./ViewsAndParticipants-styles";
import Icon from "./../icon/Icon";

const mockData = {
  views: 127,
  participants: 42,
};

const ViewsAndParticipants = ({
  views = mockData.views,
  participants = mockData.participants,
}) => {
  return (
    <StyledViews views={views} participants={participants}>
      <div className="views">
        <Icon type="views" size="sm" />
        <p>{views}</p>
      </div>
      <div className="participants">
        <Icon type="add" size="sm" />
        <p>{participants}</p>
      </div>
    </StyledViews>
  );
};

export default ViewsAndParticipants;
