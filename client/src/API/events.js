import axios from "axios";
import { getUserData } from "./user";

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

export async function createEvent(event, userId) {
  try {
    const response = await axios.post(`http://localhost:5000/events`, event);
    const createdEvent = response.data;
    const user = await getUserData(userId);
    user.events.push(createdEvent.id);
    await axios.put(`http://localhost:5000/users/${userId}`, user);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
