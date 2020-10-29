import axios from "axios";

export async function getEvents(userId) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://localhost:5000/api/calendar/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function addEvent(userId, eventId) {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/calendar/${userId}/add/${eventId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeEvent(userId, eventId) {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/calendar/${userId}/remove/${eventId}`
    );

    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
