import axios from "axios";

import { authHeader } from "../utilities/jwtHelpers";

export async function getUserData(userId) {
  try {
    const response = await axios(`/users/${userId}`, { headers: authHeader() });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login(user) {
  try {
    const response = await axios.post("/users/login", user);
    const { data } = response.data;
    if (!data.token) {
      throw new Error("No token");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signup(user) {
  try {
    const response = await axios.post("/users/signup", user);
    const { data } = response.data;
    if (!data.token) {
      throw new Error("No token");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editProfile(data) {
  const { Authorization } = authHeader();
  try {
    const response = await axios({
      url: "/users/editProfile",
      data: data,
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
        Authorization,
      },
    });
    return response.data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
