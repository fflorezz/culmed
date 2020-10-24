import axios from "axios";

export async function getAllEvents() {
  try {
    const response = await axios(`http://localhost:5000/api/events`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getEventsByAuthor(authorId) {
  try {
    const response = await axios(
      `http://localhost:5000/api/events/user/${authorId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getEventById(eventId) {
  try {
    const response = await axios(`http://localhost:5000/api/events/${eventId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createEvent(event) {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/events`,
      event
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteEvent(eventId) {
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/events/${eventId}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateEvent(event) {
  try {
    const response = await axios.put(
      `http://localhost:5000/api/events/${event.id}`,
      event
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
