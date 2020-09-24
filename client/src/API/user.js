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

export async function followUser(userId, followId) {
  try {
    const user = await getUserData(userId);
    user.following.push(followId);
    const userResponse = await axios.put(
      `http://localhost:5000/users/${userId}`,
      user
    );
    const followed = await getUserData(followId);
    followed.followers.push(userId);
    const followedResponse = await axios.put(
      `http://localhost:5000/users/${followId}`,
      followed
    );
    return userResponse.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function unfollowUser(userId, followId) {
  try {
    const user = await getUserData(userId);
    user.following = user.following.filter(id => id !== followId);
    const userResponse = await axios.put(
      `http://localhost:5000/users/${userId}`,
      user
    );
    const followed = await getUserData(followId);
    followed.followers = followed.followers.filter(id => id !== userId);
    const followedResponse = await axios.put(
      `http://localhost:5000/users/${followId}`,
      followed
    );
    return userResponse.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
