import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./Icon-styles";
import { ReactComponent as SearchSVG } from "../../../assets/icons/search.svg";
import { ReactComponent as AddSVG } from "../../../assets/icons/icon add.svg";
import { ReactComponent as CalendarSVG } from "../../../assets/icons/icon calendar.svg";
import { ReactComponent as FileSVG } from "../../../assets/icons/icon file.svg";
import { ReactComponent as LikeSVG } from "../../../assets/icons/icon like.svg";
import { ReactComponent as NotificationSVG } from "../../../assets/icons/icon notification.svg";
import { ReactComponent as TagSVG } from "../../../assets/icons/icon tag.svg";
import { ReactComponent as TimeSVG } from "../../../assets/icons/icon time.svg";
import { ReactComponent as ViewsSVG } from "../../../assets/icons/icon views.svg";
import { ReactComponent as ArrowSVG } from "../../../assets/icons/icon arrow.svg";

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
    arrow: <ArrowSVG />,
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
