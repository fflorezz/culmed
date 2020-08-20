import React from "react";
import StyledTags from "./Tags-styles";
import Icon from "./../../shared/icon/Icon";

const Tags = () => {
  return (
    <StyledTags>
      <Icon type="tag" color="primary" size="sm" />
      <p>Teatro</p>
      <p>Danza</p>
    </StyledTags>
  );
};

export default Tags;
