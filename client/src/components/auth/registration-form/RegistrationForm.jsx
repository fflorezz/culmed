import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Button from "./../../shared/button/Button";

import StyledRegistrationForm from "./RegistrationForm-styles";

const RegistrationForm = () => {
  const { handleSubmit, errors, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <StyledRegistrationForm>
      <p className="login">
        ¿Ya tienes una cuenta?
        <span>
          <Link to="/login">Inicia Sesión</Link>
        </span>
      </p>
      <h2>Regístrate en la App</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          ref={register({ required: true, minLength: 5 })}
          className={errors.name && "error"}
        />
        {errors.name && (
          <p className="alert-text">
            Es necesario un nombre de mínimo 5 caracteres
          </p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          ref={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className={errors.email && "error"}
        />
        {errors.email && (
          <p className="alert-text">Es necesario un email valido</p>
        )}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          ref={register({ required: true, minLength: 6 })}
          className={errors.password && "error"}
        />
        {errors.password && (
          <p className="alert-text">
            Es necesaria una contraseña de mínimo 6 caracteres
          </p>
        )}
        <Button size="lg" text="Registrarse" color="secondary" />
      </form>
      <p className="politics">
        Al continuar, aceptas las <span>Condiciones</span> del servicio y la{" "}
        <span>Política</span> de privacidad
      </p>
    </StyledRegistrationForm>
  );
};

export default RegistrationForm;
