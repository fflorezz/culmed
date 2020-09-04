import React from "react";
import StyledModal from "./Modal-styles";

const Modal = ({ children, handleClick }) => {
  return <StyledModal onClick={handleClick}>{children}</StyledModal>;
};

export default Modal;
