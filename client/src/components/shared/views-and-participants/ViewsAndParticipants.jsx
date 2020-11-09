import React from "react";
import PropTypes from "prop-types";

import StyledViews from "./ViewsAndParticipants-styles";
import Icon from "./../icon/Icon";

const ViewsAndParticipants = ({ views, participants }) => {
  return (
    <StyledViews>
      <div className="views">
        <Icon type="views" size="xs" />
        <p>{views || "0"}</p>
      </div>
      <div className="participants">
        <Icon type="add" size="xs" />
        <p>{participants || "0"}</p>
      </div>
    </StyledViews>
  );
};

ViewsAndParticipants.propTypes = {
  views: PropTypes.number,
  participants: PropTypes.number,
};

export default ViewsAndParticipants;
