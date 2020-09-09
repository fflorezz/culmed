import React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledProfileNav from "./ProfileNav-styles";
import Avatar from "../../user/avatar/Avatar";

const ProfileNav = ({ url }) => {
  return (
    <StyledProfileNav>
      <div className="profile-avatar">
        <Avatar size="lg" text />
      </div>
      <ul>
        <li>
          <NavLink
            to={`${url}/events`}
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Mis Eventos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/calendar`}
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Mi Agenda
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/following`}
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Siguiendo
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${url}/account/edit`}
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Editar Perfíl
          </NavLink>
        </li>
      </ul>
    </StyledProfileNav>
  );
};

export default ProfileNav;
