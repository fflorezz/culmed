import axios from "axios";

export async function getCalendar(userId) {
  try {
    const response = await axios(
      `http://localhost:5000/api/calendar/user/${userId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
