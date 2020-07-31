import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import StyledElement from "./Button-styles";

const Button = ({ btnColor, size, text, outline, handleClick, link }) => {
  if (link) {
    return (
      <Link to={link} style={{ textDecoration: "none" }}>
        <StyledElement btnColor={btnColor} size={size} outline={outline}>
          {text}
        </StyledElement>
      </Link>
    );
  }
  return (
    <StyledElement
      as='button'
      btnColor={btnColor}
      size={size}
      outline={outline}
      onClick={handleClick}
    >
      {text}
    </StyledElement>
  );
};

Button.defaultProps = {
  btnColor: "black",
  size: "md",
  text: "Button",
  outline: false,
  link: "",
  handleClick: () => {
    console.log("click");
  },
};

Button.propTypes = {
  btnColor: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  outline: PropTypes.bool,
  handleCLick: PropTypes.func,
};

export default Button;
