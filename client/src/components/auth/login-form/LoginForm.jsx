import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "./../../shared/button/Button";

import StyledLoginForm from "./LoginForm-styles";

const LoginForm = () => {
  const { handleSubmit, errors, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <StyledLoginForm>
      <p className="login">
        ¿No tienes una cuenta?{" "}
        <span>
          <Link to="/signup">Regístrate</Link>
        </span>
      </p>
      <h2>Inicia Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          type="text"
          name="password"
          ref={register({ required: true, minLength: 6 })}
          className={errors.password && "error"}
        />
        {errors.password && (
          <p className="alert-text">
            Es necesaria una contraseña de mínimo 6 caracteres
          </p>
        )}
        <Button size="lg" text="Iniciar Sesión" color="secondary" />
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
