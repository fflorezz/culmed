import React from "react";
import StyledCreateEventForm from "./CreateEventForm-styles";
import Button from "./../../shared/button/Button";
import ImageUpload from "./../image-upload/ImageUpload.jsx";
import { useHistory } from "react-router";

const CreateEventForm = () => {
  function goBack(e) {
    e.preventDefault();
    history.goBack();
  }
  const history = useHistory();
  return (
    <StyledCreateEventForm>
      <form action="">
        <ImageUpload />
        <div className="form-text">
          <label htmlFor="title">Evento</label>
          <input type="text" name="title" />
          <div className="group">
            <div className="field">
              <label htmlFor="start-date">Inicia</label>
              <input className="date" type="datetime-local" name="start-date" />
            </div>
            <div className="field">
              <label htmlFor="end-date">Finaliza</label>
              <input className="date" type="datetime-local" name="end-date" />
            </div>
          </div>
          <label htmlFor="location">Lugar</label>
          <input type="text" name="location" />
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="3"
          ></textarea>
          <div className="group">
            <div className="field">
              <label htmlFor="tags">Etiquetas</label>
              <select name="tags" id="tags">
                <option value="cine">cine</option>
                <option value="teatro">teatro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="price">Valor</label>
              <input type="text" name="price" id="price" />
            </div>
          </div>
          <div className="buttons">
            <Button
              color="primary"
              outline
              text="Cancelar"
              handleClick={goBack}
            />
            <Button color="primary" text="Crear" />
          </div>
        </div>
      </form>
    </StyledCreateEventForm>
  );
};

export default CreateEventForm;
