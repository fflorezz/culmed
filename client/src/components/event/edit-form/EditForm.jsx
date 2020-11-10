import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { clearStatus, updateEvent } from "../../../redux/slices/session";
import { formatDateInput } from "./../../../utilities/formaters";

import Button from "./../../shared/button/Button";
import PageContainer from "./../../shared/page-container/PageContainer";

import StyledEditForm from "./EditForm-styles";

const EditForm = ({ toggleEditForm, event }) => {
  const dispatch = useDispatch();
  const session = useSelector(state => state.session);
  const { loading, error, status } = session;
  const { register, handleSubmit, errors } = useForm();
  const defaultStartDate = formatDateInput(event.startDate);

  function onSubmit(data) {
    if (loading) {
      return;
    }
    dispatch(updateEvent({ ...data, authorId: session.id, id: event.id }));
  }

  useEffect(() => {
    if (status === "OK") {
      toggleEditForm(false);
      return () => {
        dispatch(clearStatus());
      };
    }
    // eslint-disable-next-line
  }, [status]);

  if (loading) {
    return (
      <StyledEditForm>
        <h4>Estamos editando tu evento...</h4>
      </StyledEditForm>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <h4>Algo salió mal, intentalo más tarde ...</h4>
      </PageContainer>
    );
  }

  return (
    <StyledEditForm onClick={e => e.stopPropagation()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="buttons">
          <Button
            size="sm"
            type="button"
            color="primary"
            outline
            text="Cancelar"
            handleClick={e => {
              e.preventDefault();
              toggleEditForm(false);
            }}
          />
          <Button size="sm" color="primary" text="Guardar" />
        </div>
        <div className="form-text">
          <label htmlFor="title">Evento</label>
          <input
            defaultValue={event.title}
            type="text"
            name="title"
            ref={register({
              required: true,
            })}
            className={errors.title && "error"}
          />
          {errors.title && <p className="alert-text">Es necesario un título</p>}
          <div className="group">
            <div className="field">
              <label htmlFor="start">Inicia</label>
              <input
                defaultValue={defaultStartDate}
                type="datetime-local"
                name="startDate"
                ref={register({ required: true })}
                className={`date ${errors.start && "error"}`}
              />
            </div>
            <div className="field">
              <label htmlFor="end">Finaliza</label>
              <input
                className="date"
                type="datetime-local"
                name="endDate"
                ref={register}
              />
            </div>
          </div>
          {errors.start && (
            <p className="alert-text">Es necesaria una fecha de inicio</p>
          )}
          <label htmlFor="location">Lugar</label>
          <input
            defaultValue={event.location}
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
            defaultValue={event.description}
            name="description"
            id="description"
            cols="30"
            rows="3"
            ref={register({ required: true, minLength: 15, maxLength: 300 })}
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
              <select
                name="category"
                id="category"
                ref={register}
                defaultValue={event.category}
              >
                <option value="">Ninguna</option>
                <option value="teatro">Teatro</option>
                <option value="danza">Danza</option>
                <option value="cine">Cine</option>
                <option value="música">Música</option>
                <option value="tecnología">Tecnología</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="price">Valor</label>
              <input
                defaultValue={event.price}
                type="text"
                name="price"
                id="price"
                ref={register({ pattern: /^\d+$/ })}
                className={errors.price && "error"}
              />
            </div>
          </div>
          {errors.price && (
            <p className="alert-text">
              El valor debe ser un número sin puntos, ni comas
            </p>
          )}
        </div>
      </form>
    </StyledEditForm>
  );
};

export default EditForm;
