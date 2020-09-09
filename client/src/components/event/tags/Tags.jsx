import React from "react";
import StyledTags from "./Tags-styles";
import Icon from "./../../shared/icon/Icon";

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      <Icon type="tag" color="primary" size="sm" />
      {tags && tags.map((tag, idx) => <p key={idx}> {tag}</p>)}
    </StyledTags>
  );
};

export default Tags;
