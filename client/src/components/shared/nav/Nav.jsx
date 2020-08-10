import React from "react";
import { NavLink } from "react-router-dom";

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
        <li>
          <FilterDrop options={mockOptions} />
        </li>
        <li>
          <NavLink
            to="/explorar"
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
            to="/siguiendo"
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
        Editar
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
