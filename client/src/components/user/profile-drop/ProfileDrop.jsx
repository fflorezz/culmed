import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import StyledDrop from "./ProfileDrop-styles";

const ProfileDrop = () => {
  const userId = useSelector(state => state.user.id);
  return (
    <StyledDrop>
      <Link to={`/${userId}`}>Perfíl</Link>
      <Link to="/logout">Salir</Link>
    </StyledDrop>
  );
};

export default ProfileDrop;
