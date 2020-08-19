import React from "react";
import RegistrationForm from "./../registration-form/RegistrationForm";
import StyledRegistrationPage from "./RegistrationPage-styles";

const RegistrationPage = () => {
  return (
    <StyledRegistrationPage>
      <div className="text">
        <h1>BIENVENIDO</h1>
        <h1>A CULMED!</h1>
      </div>
      <RegistrationForm />
    </StyledRegistrationPage>
  );
};

export default RegistrationPage;
