import React from "react";
import { Link } from "react-router-dom";

import StyledDrop from "./ProfileDrop-styles";

const ProfileDrop = () => {
  return (
    <StyledDrop>
      <Link to="/:userId/profile">Perfíl</Link>
      <Link to="/logout">Salir</Link>
    </StyledDrop>
  );
};

export default ProfileDrop;
