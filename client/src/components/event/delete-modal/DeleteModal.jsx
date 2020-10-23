import React from "react";
import StyledDeleteModal from "./DeleteModal-styles";
import Button from "./../../shared/button/Button";

const DeleteModal = ({ show, showModal }) => {
  if (!show) {
    return null;
  }

  return (
    <StyledDeleteModal>
      <h5>¿Estas seguro que deseas eliminar este evento?</h5>
      <p>Esta acción no se puede deshacer</p>
      <div className="delete-buttons">
        <Button
          text="Cancelar"
          size="sm"
          color="secondary"
          outline
          handleClick={() => {
            showModal(false);
          }}
        />
        <Button text="Eliminar" size="sm" color="secondary" />
      </div>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
