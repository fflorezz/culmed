import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import Button from "./../../shared/button/Button";

import StyledLoginForm from "./LoginForm-styles";
import { useSelector, useDispatch } from "react-redux";
import { clearStatus, login, setUser } from "./../../../redux/slices/session";

const LoginForm = () => {
  const { handleSubmit, errors, register } = useForm();
  const { loading, status } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(data) {
    if (loading) {
      return;
    }
    dispatch(login(data));
  }

  useEffect(() => {
    if (status === "OK") {
      dispatch(setUser(localStorage.getItem("userId")));
      history.push("/");
      return () => {
        dispatch(clearStatus());
      };
    }
    // eslint-disable-next-line
  }, [status]);

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
        <Button size="lg" text="Iniciar Sesión" color="secondary" />
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
