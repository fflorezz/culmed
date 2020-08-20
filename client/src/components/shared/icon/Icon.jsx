import React from "react";
import PropTypes from "prop-types";

import StyledIcon from "./Icon-styles";
import { ReactComponent as SearchSVG } from "../../../assets/svg/search.svg";
import { ReactComponent as AddSVG } from "../../../assets/svg/icon add.svg";
import { ReactComponent as CalendarSVG } from "../../../assets/svg/icon calendar.svg";
import { ReactComponent as FileSVG } from "../../../assets/svg/icon file.svg";
import { ReactComponent as LikeSVG } from "../../../assets/svg/icon like.svg";
import { ReactComponent as NotificationSVG } from "../../../assets/svg/icon notification.svg";
import { ReactComponent as TagSVG } from "../../../assets/svg/icon tag.svg";
import { ReactComponent as TimeSVG } from "../../../assets/svg/icon time.svg";
import { ReactComponent as ViewsSVG } from "../../../assets/svg/icon views.svg";
import { ReactComponent as ArrowSVG } from "../../../assets/svg/icon arrow.svg";
import { ReactComponent as LocationSVG } from "../../../assets/svg/icon location.svg";

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
    location: <LocationSVG />,
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
