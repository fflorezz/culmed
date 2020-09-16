import React from "react";
import Icon from "../icon/Icon";
import StyledModal from "./Modal-styles";

const Modal = ({ children, handleClick }) => {
  return (
    <StyledModal onClick={handleClick}>
      <div className="closeBtn">
        <Icon type="close" color="gray" size="md" />
      </div>
      {children}
    </StyledModal>
  );
};

export default Modal;
