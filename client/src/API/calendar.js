import axios from "axios";

export async function getEvents(userId) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`/calendar/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function addEvent(eventId) {
  try {
    const response = await axios.post(`/calendar/add/${eventId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeEvent(eventId) {
  try {
    const response = await axios.delete(`calendar/remove/${eventId}`);

    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
