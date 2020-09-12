import axios from "axios";

export async function getAllEvents() {
  try {
    const response = await axios(`http://localhost:5000/events/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getEventsByAuthor(authorId) {
  try {
    const response = await axios(
      `http://localhost:5000/events?authorId=${authorId}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getEventById(eventId) {
  try {
    const response = await axios(`http://localhost:5000/events/${eventId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
