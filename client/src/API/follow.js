import axios from "axios";
import { authHeader } from "../utilities/jwtHelpers";

export const getFollowersandFollowings = async userId => {
  try {
    const response = await axios(`/follow/${userId}`, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const followUser = async followingId => {
  try {
    const response = await axios(`/follow/add/${followingId}`, {
      method: "POST",
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const unfollowUser = async followingId => {
  try {
    const response = await axios.delete(`/follow/remove/${followingId}`, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
