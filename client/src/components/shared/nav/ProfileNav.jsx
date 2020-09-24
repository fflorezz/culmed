import React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "../../../global-styles";

import StyledProfileNav from "./ProfileNav-styles";
import Avatar from "../../user/avatar/Avatar";
import FollowingButton from "./../button/FollowingButton";

const linkActiveStyle = {
  backgroundColor: styles.colors.complementary,
  color: "white",
};

const ProfileNav = ({ user, isOwnProfile, isFollowing }) => {
  const { id, userName, avatarImg, following, followers } = user;

  return (
    <StyledProfileNav>
      <div className="profile">
        <Avatar
          src={avatarImg}
          name={userName}
          following={following}
          followers={followers}
          size="lg"
        />
        <div className="userInfo">
          <p className="name">{userName}</p>
          <div className="follow">
            <p className="followers">
              Seguidores <span>{followers && followers.length}</span>
            </p>
            <div className="spacer"></div>
            <p className="following">
              Siguiendo <span>{following && following.length}</span>
            </p>
          </div>
          {isOwnProfile ? null : (
            <div className="followingBtn">
              <FollowingButton isFollowing={isFollowing} followId={id} />
            </div>
          )}
        </div>
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
