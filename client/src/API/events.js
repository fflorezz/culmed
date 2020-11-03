import axios from "axios";
import { authHeader } from "../utilities/jwtHelpers";

export async function getAllEvents() {
  try {
    const response = await axios(`/events`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getEventsByAuthor(authorId) {
  try {
    const response = await axios(`/events/user/${authorId}`, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getEventById(eventId) {
  try {
    const response = await axios(`/events/${eventId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createEvent(event) {
  const { Authorization } = authHeader();
  try {
    const response = await axios({
      url: "/events",
      data: event,
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
        Authorization,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(`/events/${eventId}`, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateEvent(event) {
  try {
    const response = await axios.put(`/events/${event.id}`, event, {
      headers: authHeader(),
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
