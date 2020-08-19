import React from "react";
import StyledLoginForm from "./LoginForm-styles";
import Button from "./../../shared/button/Button";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <p className="login">
        ¿No tienes una cuenta? <span>Regístrate</span>
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
