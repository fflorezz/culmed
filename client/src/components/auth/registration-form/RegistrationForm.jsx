import React from "react";
import Button from "./../../shared/button/Button";
import StyledRegistrationForm from "./RegistrationForm-styles";

const RegistrationForm = () => {
  return (
    <StyledRegistrationForm>
      <p className="login">
        ¿Ya tienes una cuenta? <span>Inicia Sesión</span>
      </p>
      <h2>Regístrate en la App</h2>
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="text" name="password" />
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
