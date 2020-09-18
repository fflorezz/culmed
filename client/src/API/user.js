import axios from "axios";

export async function getUserData(userId) {
  try {
    const response = await axios(`http://localhost:5000/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addEvent(userId, eventId) {
  try {
    const user = await getUserData(userId);
    user.calendar.push(eventId);
    const response = await axios.put(
      `http://localhost:5000/users/${userId}`,
      user
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function removeEvent(userId, eventId) {
  try {
    const user = await getUserData(userId);
    user.calendar = user.calendar.filter(id => id !== eventId);
    const response = await axios.put(
      `http://localhost:5000/users/${userId}`,
      user
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
