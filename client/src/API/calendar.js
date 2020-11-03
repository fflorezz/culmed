import axios from "axios";
import { authHeader } from "../utilities/jwtHelpers";

export async function getEvents(userId) {
  try {
    const response = await axios.get(`/calendar/${userId}`, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function addEvent(eventId) {
  try {
    const response = await axios.post(`/calendar/add/${eventId}`, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeEvent(eventId) {
  try {
    const response = await axios.delete(`calendar/remove/${eventId}`, {
      headers: authHeader(),
    });

    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
