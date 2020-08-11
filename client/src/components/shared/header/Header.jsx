import React, { useState } from "react";
import StyledHeader from "./Header-styles";
import Logo from "./../logo/Logo";
import Button from "./../button/Button";
import Icon from "./../icon/Icon";
import Avatar from "../../user/avatar/Avatar";
import ProfileDrop from "./../../user/profile-drop/ProfileDrop";

const Header = () => {
  const isLogin = false;
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrop() {
    setIsOpen(!isOpen);
  }

  if (!isLogin) {
    return (
      <StyledHeader>
        <div className="main">
          <Logo />
          <div className="user">
            <Button size="sm" color="primary" text="Iniciar Sesión" outline />
            <Button size="sm" color="primary" text="Registrarse" />
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
            <Avatar size="md" />
            {isOpen && <ProfileDrop />}
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
