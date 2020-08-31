import React, { useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import Logo from "./../logo/Logo";
import Button from "./../button/Button";
import Icon from "./../icon/Icon";
import Avatar from "../../user/avatar/Avatar";
import ProfileDrop from "./../../user/profile-drop/ProfileDrop";

import StyledHeader from "./Header-styles";

const Header = () => {
  const isLogin = true;
  const [isOpen, setIsOpen] = useState(false);

  const matchLogin = useRouteMatch("/login");
  const matchSignup = useRouteMatch("/signup");

  function toggleDrop() {
    setIsOpen(!isOpen);
  }

  if (matchLogin || matchSignup) {
    return null;
  }

  if (!isLogin) {
    return (
      <StyledHeader>
        <div className="main">
          <Logo />
          <div className="user">
            <Button
              size="sm"
              color="primary"
              text="Iniciar Sesión"
              outline
              link="/login"
            />
            <Button
              size="sm"
              color="primary"
              text="Registrarse"
              link="/signup"
            />
          </div>
        </div>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <div className="main">
        <Logo />
        <div className="user">
          <Button size="sm" color="primary" text="Crear Evento" />
          <Icon type="notification" size="sm" />
          <div
            className="avatar-hover"
            onMouseEnter={toggleDrop}
            onMouseLeave={toggleDrop}
          >
            <Link to="/profile">
              <Avatar size="md" />
            </Link>
            {isOpen && <ProfileDrop />}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
