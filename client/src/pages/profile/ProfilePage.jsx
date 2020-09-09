import React from "react";
import ProfileNav from "../../components/shared/nav/ProfileNav";
import ProfileRoutes from "./ProfileRoutes";
import { useRouteMatch } from "react-router-dom";

const ProfilePage = () => {
  let { url } = useRouteMatch();
  return (
    <>
      <ProfileNav url={url} />
      <ProfileRoutes />
    </>
  );
};

export default ProfilePage;
