import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import StyledCreateEventForm from "./CreateEventForm-styles";
import Button from "./../../shared/button/Button";
import ImageUpload from "./../image-upload/ImageUpload.jsx";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../../../redux/slices/events";

const CreateEventForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const { loading, error } = useSelector(state => state.events);
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    const event = {
      ...data,
      authorId: session.id,
      authorName: session.name,
      authorImg: session.avatarImg,
    };
    dispatch(createEvent(event));
  }

  function goBack(e) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <StyledCreateEventForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload />
        <div className="form-text">
          <label htmlFor="title">Evento</label>
          <input
            type="text"
            name="title"
            ref={register({
              required: true,
              minLength: 5,
            })}
            className={errors.title && "error"}
          />
          {errors.title && (
            <p className="alert-text">
              Es necesario un título con mas de 5 caracteres
            </p>
          )}
          <div className="group">
            <div className="field">
              <label htmlFor="start">Inicia</label>
              <input
                type="datetime-local"
                name="start"
                ref={register({ required: true })}
                className={`date ${errors.start && "error"}`}
              />
            </div>
            <div className="field">
              <label htmlFor="end">Finaliza</label>
              <input
                className="date"
                type="datetime-local"
                name="end"
                ref={register}
              />
            </div>
          </div>
          {errors.start && (
            <p className="alert-text">Es necesaria una fecha de inicio</p>
          )}
          <label htmlFor="location">Lugar</label>
          <input
            type="text"
            name="location"
            ref={register({ required: true })}
            className={errors.location && "error"}
          />
          {errors.location && (
            <p className="alert-text">Es necesario añadir un lugar</p>
          )}
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="3"
            ref={register({ required: true, minLength: 15, maxLength: 120 })}
            className={errors.description && "error"}
          ></textarea>
          {errors.description && (
            <p className="alert-text">
              Es necesaria una descripción entre 15 y 120 caracteres
            </p>
          )}
          <div className="group">
            <div className="field">
              <label htmlFor="category">Categoría</label>
              <select name="category" id="category" ref={register}>
                <option value="">Ninguna</option>
                <option value="teatro">Teatro</option>
                <option value="danza">Danza</option>
                <option value="cine">Cine</option>
                <option value="música">Música</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="price">Valor</label>
              <input
                type="text"
                name="price"
                id="price"
                ref={register({ pattern: /^\d+$/ })}
                className={errors.price && "error"}
              />
            </div>
          </div>
          {errors.price && (
            <p className="alert-text">El valor debe ser un número</p>
          )}
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
