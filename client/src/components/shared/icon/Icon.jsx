import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./Icon-styles";
import { ReactComponent as SearchSVG } from "../../../assets/search.svg";
import { ReactComponent as AddSVG } from "../../../assets/icon add.svg";
import { ReactComponent as CalendarSVG } from "../../../assets/icon calendar.svg";
import { ReactComponent as FileSVG } from "../../../assets/icon file.svg";
import { ReactComponent as LikeSVG } from "../../../assets/icon like.svg";
import { ReactComponent as NotificationSVG } from "../../../assets/icon notification.svg";
import { ReactComponent as TagSVG } from "../../../assets/icon tag.svg";
import { ReactComponent as TimeSVG } from "../../../assets/icon time.svg";
import { ReactComponent as ViewsSVG } from "../../../assets/icon views.svg";

const Icon = ({ size, type, color }) => {
  const svgs = {
    search: <SearchSVG />,
    add: <AddSVG />,
    calendar: <CalendarSVG />,
    file: <FileSVG />,
    like: <LikeSVG />,
    notification: <NotificationSVG />,
    tag: <TagSVG />,
    time: <TimeSVG />,
    views: <ViewsSVG />,
  };
  return (
    <StyledIcon size={size} color={color}>
      {svgs[type]}
    </StyledIcon>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
