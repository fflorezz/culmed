import React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledNav from "./Nav-styles";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
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
