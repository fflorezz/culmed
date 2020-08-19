import React from "react";
import LoginForm from "./../login-form/LoginForm";
import StyledLoginPage from "./LoginPage-styles";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="text">
        <h1>BIENVENIDO</h1>
        <h1>A CULMED!</h1>
      </div>
      <LoginForm />
    </StyledLoginPage>
  );
};

export default LoginPage;
