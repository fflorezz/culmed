import React from "react";
import StyledCreateEventForm from "./CreateEventForm-styles";
import Button from "./../../shared/button/Button";
import ImageUpload from "./../image-upload/ImageUpload.jsx";

const CreateEventForm = () => {
  return (
    <StyledCreateEventForm>
      <form action="">
        <ImageUpload />
        <div className="form-text">
          <label htmlFor="title">Evento</label>
          <input type="text" name="title" />
          <div className="date">
            <div className="field">
              <label htmlFor="startDate">Inicia</label>
              <input type="datetime-local" name="start-date" />
            </div>
            <div className="field">
              <label htmlFor="end-date">Finaliza</label>
              <input type="datetime-local" name="end-date" />
            </div>
          </div>
          <label htmlFor="location">Lugar</label>
          <input type="text" name="location" />
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
          <label htmlFor="tags">Etiquetas</label>
          <select name="tags" id="tags">
            <option value="cine">cine</option>
            <option value="teatro">teatro</option>
          </select>
          <label htmlFor="price">Valor</label>
          <input type="text" name="price" id="price" />
          <div className="buttons">
            <Button color="primary" outline text="Cancelar" />
            <Button color="primary" text="Crear" />
          </div>
        </div>
      </form>
    </StyledCreateEventForm>
  );
};

export default CreateEventForm;
