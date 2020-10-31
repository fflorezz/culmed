import axios from "axios";

export async function getUserData(userId) {
  try {
    const response = await axios(`http://localhost:5000/api/users/${userId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login(user) {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      user
    );
    const { data } = response.data;
    if (!data.token) {
      throw new Error("No token");
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
