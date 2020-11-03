import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import StyledDrop from "./ProfileDrop-styles";
import { logout } from "../../../redux/slices/session";

const ProfileDrop = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <StyledDrop>
      <Link to={`/${userId}`}>Perfíl</Link>
      <button onClick={handleLogout}>Salir</button>
    </StyledDrop>
  );
};

export default ProfileDrop;
