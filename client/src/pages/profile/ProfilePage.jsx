import React, { useEffect } from "react";
import ProfileNav from "../../components/shared/nav/ProfileNav";
import ProfileRoutes from "./ProfileRoutes";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "./../../redux/slices/user.slice";
import NotFoundPage from "./../not-found/NotFoundPage";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector(state => state.user);
  const { loading, error } = user;

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [userId, dispatch]);

  function renderProfile() {
    if (loading) {
      return <h4>Loading...</h4>;
    }

    if (error) {
      return <NotFoundPage />;
    }

    if (user) {
      return (
        <>
          <ProfileNav user={user} />
          <ProfileRoutes />
        </>
      );
    }
  }

  return <div>{renderProfile()}</div>;
};

export default ProfilePage;
