import axios from "axios";

export async function getUserData(userId) {
  try {
    const response = await axios(`http://localhost:5000/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
