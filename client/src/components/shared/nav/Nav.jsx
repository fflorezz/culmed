import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledNav from "./Nav-styles";
import FilterDrop from "./../filter-drop/FilterDrop";
import Avatar from "./../../user/avatar/Avatar";

const mockOptions = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Cine" },
  { id: 2, name: "Teatro" },
  { id: 3, name: "Danza" },
  { id: 4, name: "Música" },
];

const Nav = () => {
  let globalNav = (
    <ul>
      <li>
        <NavLink
          to="/explore"
          activeStyle={{
            backgroundColor: styles.colors.complementary,
            color: "white",
          }}
        >
          Explorar
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/following"
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
          to="/my-calendar"
          activeStyle={{
            backgroundColor: styles.colors.complementary,
            color: "white",
          }}
        >
          Mi Agenda
        </NavLink>
      </li>
      {useRouteMatch("/explore") ? (
        <li>
          <FilterDrop options={mockOptions} />
        </li>
      ) : null}
    </ul>
  );

  let profileNav = (
    <>
      <div className="profile-avatar">
        <Avatar size="lg" text />
      </div>
      <ul>
        <li>
          <NavLink
            to="/profile/my-events"
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
            to="/profile/edit"
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Editar Perfíl
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <StyledNav>{useRouteMatch("/profile") ? profileNav : globalNav}</StyledNav>
  );
};

export default Nav;
