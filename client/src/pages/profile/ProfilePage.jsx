import React, { useEffect } from "react";
import ProfileNav from "../../components/shared/nav/ProfileNav";
import ProfileRoutes from "./ProfileRoutes";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../redux/slices/user.slice";
import NotFoundPage from "./../not-found/NotFoundPage";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector(state => state.user);
  const { loading, error } = user;
  const session = useSelector(state => state.session);
  let isOwnProfile = false;
  let isFollowing = false;

  if (session.id) {
    isOwnProfile = session.id === user.id;
    isFollowing = session.following.some(u => u.id === userId);
  }

  useEffect(() => {
    dispatch(fetchUserData(userId));
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
          <ProfileNav
            user={user}
            isOwnProfile={isOwnProfile}
            isFollowing={isFollowing}
          />
          <ProfileRoutes />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
