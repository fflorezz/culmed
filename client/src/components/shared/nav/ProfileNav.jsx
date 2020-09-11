import React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledProfileNav from "./ProfileNav-styles";
import Avatar from "../../user/avatar/Avatar";

const ProfileNav = ({ user }) => {
  const { id, userName, avatarImg } = user;
  return (
    <StyledProfileNav>
      <div className="profile-avatar">
        <Avatar src={avatarImg} name={userName} size="lg" text />
      </div>
      <ul>
        <li>
          <NavLink
            to={`/${id}/events`}
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Eventos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${id}/calendar`}
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Agenda
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${id}/following`}
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
            to={`/${id}/account/edit`}
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
