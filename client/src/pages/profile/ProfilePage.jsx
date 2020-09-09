import React from "react";
import ProfileNav from "../../components/shared/nav/ProfileNav";
import ProfileRoutes from "./ProfileRoutes";
import { useRouteMatch, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { userId } = useParams();
  return (
    <>
      <ProfileNav userId={userId} />
      <ProfileRoutes />
    </>
  );
};

export default ProfilePage;
