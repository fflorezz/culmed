import React from "react";
import StyledAddEventButton from "./AddEventButton-styles";
import Icon from "./../../shared/icon/Icon";

const AddEventButton = () => {
  return (
    <StyledAddEventButton>
      <Icon type="add" color="primary" />
    </StyledAddEventButton>
  );
};

export default AddEventButton;
