import React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledProfileNav from "./ProfileNav-styles";
import Avatar from "../../user/avatar/Avatar";

const linkActiveStyle = {
  backgroundColor: styles.colors.complementary,
  color: "white",
};

const ProfileNav = ({ user, isOwnProfile, isFollowing }) => {
  const { id, userName, avatarImg, following, followers } = user;

  return (
    <StyledProfileNav>
      <div className="profile-avatar">
        <Avatar
          src={avatarImg}
          name={userName}
          following={following}
          followers={followers}
          size="lg"
          text
          followingBtn={!isOwnProfile}
          isFollowing={isFollowing}
        />
      </div>
      <ul>
        <li>
          <NavLink to={`/${id}/events`} activeStyle={linkActiveStyle}>
            Eventos
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${id}/calendar`} activeStyle={linkActiveStyle}>
            Agenda
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${id}/following`} activeStyle={linkActiveStyle}>
            Siguiendo
          </NavLink>
        </li>
        {isOwnProfile && (
          <li>
            <NavLink to={`/${id}/account/edit`} activeStyle={linkActiveStyle}>
              Editar Perfíl
            </NavLink>
          </li>
        )}
      </ul>
    </StyledProfileNav>
  );
};

export default ProfileNav;
