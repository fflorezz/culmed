import React from "react";
import { Link } from "react-router-dom";

import Button from "./../../shared/button/Button";

import StyledLoginForm from "./LoginForm-styles";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <p className="login">
        ¿No tienes una cuenta?{" "}
        <span>
          <Link to="/signup">Regístrate</Link>
        </span>
      </p>
      <h2>Inicia Sesión</h2>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="text" name="password" />
        <Button size="lg" text="Iniciar Sesión" color="secondary" />
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
