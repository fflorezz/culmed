import React from "react";
import ReactDOM from "react-dom";
import StyledModal from "./Modal-styles";

const Modal = ({ children, handleClick }) => {
  let content = <StyledModal onClick={handleClick}>{children}</StyledModal>;
  return ReactDOM.createPortal(content, document.getElementById("overlay"));
};

export default Modal;
