import React from "react";
import StyledTags from "./Tags-styles";
import Icon from "./../../shared/icon/Icon";

const Tags = ({ category }) => {
  if (!category) {
    return null;
  }

  return (
    <StyledTags>
      <Icon type="tag" color="primary" size="sm" />
      <p> {category} </p>
    </StyledTags>
  );
};

export default Tags;
