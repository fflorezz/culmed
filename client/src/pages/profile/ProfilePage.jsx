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

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <ProfileNav user={user} />
          <ProfileRoutes />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
