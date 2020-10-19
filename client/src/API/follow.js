import axios from "axios";

export const getFollowersandFollowings = async userId => {
  try {
    const response = await axios(`http://localhost:5000/api/follow/${userId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const followUser = async (userId, followingId) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/follow/${userId}/add/${followingId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const unfollowUser = async (userId, followingId) => {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/follow/${userId}/remove/${followingId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
