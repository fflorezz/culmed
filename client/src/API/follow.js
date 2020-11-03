import axios from "axios";

export const getFollowersandFollowings = async userId => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios(`/follow/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const followUser = async (userId, followingId) => {
  try {
    const response = await axios.post(`/follow/add/${followingId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const unfollowUser = async (userId, followingId) => {
  try {
    const response = await axios.delete(`/follow/remove/${followingId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
