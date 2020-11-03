import axios from "axios";

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
    const response = await axios(`/events/user/${authorId}`);
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
  try {
    const response = await axios({
      url: "/events",
      data: event,
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(`/events/${eventId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateEvent(event) {
  try {
    const response = await axios.put(`/events/${event.id}`, event);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
