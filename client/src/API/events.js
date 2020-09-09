import axios from "axios";

export async function getAllEvents() {
  try {
    const response = await axios(`http://localhost:5000/events/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
