import React from "react";
import StyledAddEventButton from "./AddEventButton-styles";
import Icon from "./../../shared/icon/Icon";

const AddEventButton = ({ handleClick, isCalendarEvent }) => {
  return (
    <StyledAddEventButton onClick={handleClick}>
      <Icon
        type={isCalendarEvent ? "check" : "add"}
        color={isCalendarEvent ? "gray" : "primary"}
      />
    </StyledAddEventButton>
  );
};

export default AddEventButton;
