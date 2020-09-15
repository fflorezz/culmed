import React from "react";
import Icon from "../icon/Icon";
import StyledModal from "./Modal-styles";

const Modal = ({ children, handleClick }) => {
  return (
    <StyledModal onClick={handleClick}>
      <Icon type="close" color="gray" size="md" />
      {children}
    </StyledModal>
  );
};

export default Modal;
