import React from "react";
import PropTypes from "prop-types";

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
        <Icon type="views" size="xs" />
        <p>{views}</p>
      </div>
      <div className="participants">
        <Icon type="add" size="xs" />
        <p>{participants}</p>
      </div>
    </StyledViews>
  );
};

ViewsAndParticipants.propTypes = {
  views: PropTypes.number,
  participants: PropTypes.number,
};

export default ViewsAndParticipants;
