import React from "react";
import { Link } from "react-router-dom";

import StyledDrop from "./ProfileDrop-styles";

const ProfileDrop = () => {
  return (
    <StyledDrop>
      <Link to="/:userId/">Perfíl</Link>
      <Link to="/:userId/account/profile">Editar Perfíl</Link>
      <Link to="/:userId/events">Eventos</Link>
      <Link to="/logout">Salir</Link>
    </StyledDrop>
  );
};

export default ProfileDrop;
