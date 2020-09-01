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
  const isUserEventPath = useRouteMatch("/:userId/events");
  const isUserProfilePath = useRouteMatch("/:userId/profile");

  let globalNav = (
    <ul>
      <li>
        <NavLink
          to="/events"
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
          to="/:userId/following"
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
          to="/:userId/calendar"
          activeStyle={{
            backgroundColor: styles.colors.complementary,
            color: "white",
          }}
        >
          Mi Agenda
        </NavLink>
      </li>
      {useRouteMatch("/events") ? (
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
            to="/:userId/events"
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
            to="/:userId/profile/edit"
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
    <StyledNav>
      {isUserEventPath || isUserProfilePath ? profileNav : globalNav}
    </StyledNav>
  );
};

export default Nav;
