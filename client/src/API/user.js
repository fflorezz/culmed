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
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
