import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import * as Calendar from "../../API/calendar";
import * as User from "../../API/user";
import * as Follow from "../../API/follow";
import * as Event from "../../API/events";
import { getUserIdFromToken } from "../../utilities/jwtHelpers";
import { isTokenExpired } from "./../../utilities/jwtHelpers";

export const setUser = createAsyncThunk(
  "session/setUserStatus",
  async userId => {
    const userData = await User.getUserData(userId);
    const calendar = await Calendar.getEvents(userId);
    const { following, followers } = await Follow.getFollowersandFollowings(
      userId
    );
    const events = await Event.getEventsByAuthor(userId);
    userData.calendar = calendar;
    userData.following = following;
    userData.followers = followers;
    userData.events = events;
    return userData;
  }
);

export const followUser = createAsyncThunk(
  "session/followUserStatus",
  async followingId => {
    const response = await Follow.followUser(followingId);
    return response;
  }
);

export const unfollowUser = createAsyncThunk(
  "session/unfollowUserStatus",
  async followingId => {
    const response = await Follow.unfollowUser(followingId);
    return response;
  }
);

export const addEventToCalendar = createAsyncThunk(
  "session/addEventToCalendarStatus",
  async eventId => {
    const response = await Calendar.addEvent(eventId);
    return response;
  }
);

export const removeEventFromCalendar = createAsyncThunk(
  "session/removeEventFromCalendarStatus",
  async eventId => {
    const response = await Calendar.removeEvent(eventId);
    return response;
  }
);

export const createEvent = createAsyncThunk(
  "session/createEventStatus",
  async event => {
    const response = await Event.createEvent(event);
    return response;
  }
);

export const deleteEvent = createAsyncThunk(
  "session/deleteEventStatus",
  async eventId => {
    const response = await Event.deleteEvent(eventId);
    return response;
  }
);

export const updateEvent = createAsyncThunk(
  "session/updateEventStatus",
  async event => {
    const response = await Event.updateEvent(event);
    return response;
  }
);

export const login = createAsyncThunk("session/loginStatus", async user => {
  const response = await User.login(user);
  const userId = getUserIdFromToken(response.token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("token", response.token);
  return response;
});

export const logout = createAction("session/logout", function () {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {};
});

export const signup = createAsyncThunk("session/signupStatus", async user => {
  const response = await User.signup(user);
  const userId = getUserIdFromToken(response.token);
  localStorage.setItem("userId", userId);
  localStorage.setItem("token", response.token);
  return response;
});

export const editProfile = createAsyncThunk(
  "session/editProfileStatus",
  async data => {
    const response = await User.editProfile(data);
    return response;
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    id: null,
    isLogin: !isTokenExpired(localStorage.getItem("token")),
    loading: false,
    error: null,
    events: [],
    calendar: [],
    following: [],
    followers: [],
    status: null,
    avatarImg: null,
    userName: null,
  },
  reducers: {
    clearStatus: state => {
      state.status = null;
    },
  },
  extraReducers: {
    // SET USER DATA
    [setUser.fulfilled]: (state, { payload }) => {
      state = { ...state, ...payload };
      state.isLogin = true;
      state.error = null;
      state.loading = false;
      return state;
    },
    [setUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [setUser.pending]: state => {
      state.loading = true;
    },

    // FOLLOW USER
    [followUser.fulfilled]: (state, { payload }) => {
      state.following = [...state.following, payload];
      state.error = null;
      state.loading = false;
      return state;
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [followUser.pending]: state => {
      state.loading = true;
    },

    // UNFOLLOW USER
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.following = state.following.filter(u => u.id !== payload.id);
      state.error = null;
      state.loading = false;
      return state;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [unfollowUser.pending]: state => {
      state.loading = true;
    },

    // ADD EVENT TO CALENDAR
    [addEventToCalendar.fulfilled]: (state, { payload }) => {
      state.calendar = [...state.calendar, payload];
      state.status = "OK";
      state.error = null;
      state.loading = false;
      return state;
    },
    [addEventToCalendar.rejected]: (state, action) => {
      state.error = action.error;
      state.status = null;
      state.loading = false;
    },
    [addEventToCalendar.pending]: state => {
      state.loading = true;
    },

    // REMOVE EVENT FROM CALENDAR
    [removeEventFromCalendar.fulfilled]: (state, { payload }) => {
      state.calendar = state.calendar.filter(e => e.id !== payload.id);
      state.status = "OK";
      state.error = null;
      state.loading = false;
      return state;
    },
    [removeEventFromCalendar.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error;
      state.loading = false;
    },
    [removeEventFromCalendar.pending]: state => {
      state.loading = true;
    },

    // CREATE EVENT
    [createEvent.fulfilled]: (state, { payload }) => {
      state.events = [...state.events, payload];
      state.status = "OK";
      state.error = null;
      state.loading = false;
    },
    [createEvent.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error;
      state.loading = false;
    },
    [createEvent.pending]: state => {
      state.loading = true;
    },

    // DELETE EVENT
    [deleteEvent.fulfilled]: (state, { payload }) => {
      state.events = state.events.filter(e => e.id !== payload.id);
      state.status = "OK";
      state.error = null;
      state.loading = false;
      return state;
    },
    [deleteEvent.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error;
      state.loading = false;
    },
    [deleteEvent.pending]: state => {
      state.loading = true;
    },

    // UPDATE EVENT
    [updateEvent.fulfilled]: (state, { payload }) => {
      state.events = state.events.map(e => {
        if (e.id === payload.id) {
          return payload;
        } else {
          return e;
        }
      });
      state.status = "OK";
      state.error = null;
      state.loading = false;
    },
    [updateEvent.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error;
      state.loading = false;
    },
    [updateEvent.pending]: state => {
      state.loading = true;
    },

    // LOGIN
    [login.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      state.status = "OK";
      state.error = null;
      state.loading = false;
      return state;
    },
    [login.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [login.pending]: state => {
      state.loading = true;
    },

    // LOGOUT
    [logout]: state => {
      state.id = null;
      state.isLogin = false;
      state.events = [];
      state.calendar = [];
      state.following = [];
      state.followers = [];
      state.avatarImg = null;
      state.userName = null;
    },

    // SIGNUP
    [signup.fulfilled]: (state, { payload }) => {
      state.isLogin = true;
      state.status = "OK";
      state.error = null;
      state.loading = false;
      return state;
    },
    [signup.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [signup.pending]: state => {
      state.loading = true;
    },

    // EDIT PROFILE
    [editProfile.fulfilled]: (state, { payload }) => {
      state.avatarImg = payload.avatarImg;
      state.userName = payload.userName;
      state.status = "OK";
      state.error = null;
      state.loading = false;
    },
    [editProfile.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error;
      state.loading = false;
    },
    [editProfile.pending]: state => {
      state.loading = true;
    },
  },
});

export const { clearStatus } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
