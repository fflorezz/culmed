import axios from "axios";

export async function getEvents(userId) {
  try {
    const response = await axios(
      `http://localhost:5000/api/calendar/user/${userId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function addEvent(userId, eventId) {
  try {
    const response = await axios.post(`http://localhost:5000/api/calendar/`, {
      userId,
      eventId,
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeEvent(userId, eventId) {
  try {
    const response = await axios({
      method: "delete",
      url: "http://localhost:5000/api/calendar",
      data: {
        userId,
        eventId,
      },
    });

    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
