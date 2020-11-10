import React, { useEffect } from "react";
import StyledDeleteModal from "./DeleteModal-styles";
import Button from "./../../shared/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteEvent, clearStatus } from "../../../redux/slices/session";

const DeleteModal = ({ showModal, eventId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, status, id } = useSelector(state => state.session);

  function deleteHandler() {
    if (loading) {
      return;
    }
    dispatch(deleteEvent(eventId));
  }

  useEffect(() => {
    if (status === "OK") {
      history.push(`/${id}/events`);
      return () => {
        dispatch(clearStatus());
      };
    }
    // eslint-disable-next-line
  }, [status]);

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
        <Button
          text="Eliminar"
          size="sm"
          color="secondary"
          handleClick={deleteHandler}
        />
      </div>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
