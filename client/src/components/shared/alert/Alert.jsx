import React from "react";
import PropTypes from "prop-types";

import StyledAlert from "./Alert-styles";
import Button from "./../button/Button";

const mockData = {
  title: "¿Estas seguro de que deseas eliminar este evento?",
  text: "Esta acción no se  puede deshacer",
  btnPrimaryText: "Eliminar",
  btnSecondaryText: "Cancelar",
};

const Alert = ({
  title = mockData.title,
  text = mockData.text,
  btnPrimaryText = mockData.btnPrimaryText,
  btnSecondaryText = mockData.btnSecondaryText,
}) => {
  return (
    <StyledAlert>
      <h5>{title}</h5>
      <p>{text}</p>
      <div className="buttons">
        <Button size="md" color="secondary" text={btnSecondaryText} outline />
        <Button size="md" color="secondary" text={btnPrimaryText} />
      </div>
    </StyledAlert>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  btnPrimaryText: PropTypes.string,
  btnSecondaryText: PropTypes.string,
};

export default Alert;
