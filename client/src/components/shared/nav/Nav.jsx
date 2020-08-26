import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledNav from "./Nav-styles";
import FilterDrop from "./../filter-drop/FilterDrop";

const mockOptions = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Cine" },
  { id: 2, name: "Teatro" },
  { id: 3, name: "Danza" },
  { id: 4, name: "Música" },
];

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        {useRouteMatch("/explore") ? (
          <li>
            <FilterDrop options={mockOptions} />
          </li>
        ) : null}
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
            to="/agenda"
            activeStyle={{
              backgroundColor: styles.colors.complementary,
              color: "white",
            }}
          >
            Mi Agenda
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/editar"
        activeStyle={{
          backgroundColor: styles.colors.black,
          color: "white",
        }}
      >
        Editar Perfil
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
