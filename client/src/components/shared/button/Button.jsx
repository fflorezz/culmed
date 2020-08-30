import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import StyledElement from "./Button-styles";

const Button = ({
  color,
  size,
  text,
  outline,
  handleClick,
  link,
  hoverText,
}) => {
  const [buttonText, setText] = useState(text);

  function handleMoueseEnter() {
    if (hoverText) {
      setText(hoverText);
    }
  }

  function handleMouseLeave() {
    if (hoverText) {
      setText(text);
    }
  }

  if (link) {
    return (
      <Link
        to={link}
        style={{ textDecoration: "none" }}
        onMouseEnter={handleMoueseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledElement btnColor={color} size={size} outline={outline}>
          {buttonText}
        </StyledElement>
      </Link>
    );
  }
  return (
    <StyledElement
      as="button"
      btnColor={color}
      size={size}
      outline={outline}
      onClick={handleClick}
      onMouseEnter={handleMoueseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
    </StyledElement>
  );
};

Button.defaultProps = {
  color: "black",
  size: "md",
  text: "Button",
  outline: false,
  link: "",
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  outline: PropTypes.bool,
  handleCLick: PropTypes.func,
};

export default Button;
