import React from "react";
import StyledComponent from "./Button-styles";
import { Link } from "react-router-dom";

const Button = ({
  btnColor = "black",
  size = "md",
  text = "Button",
  outline = false,
  handleFunction = () => {
    console.log("click");
  },
  link = "",
}) => {
  return link ? (
    <Link to={link} style={{ textDecoration: "none" }}>
      <StyledComponent
        as='div'
        btnColor={btnColor}
        size={size}
        outline={outline}
      >
        {text}
      </StyledComponent>
    </Link>
  ) : (
    <StyledComponent
      btnColor={btnColor}
      size={size}
      outline={outline}
      onClick={handleFunction}
    >
      {text}
    </StyledComponent>
  );
};

export default Button;
