import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as Calendar from "../../API/calendar";
import * as User from "../../API/user";

export const fetchUserData = createAsyncThunk(
  "session/fetchUserDataStatus",
  async userId => {
    const userData = await User.getUserData(userId);
    const calendar = await Calendar.getEvents(userId);
    userData.calendar = calendar;
    return userData;
  }
);

export const followUser = createAsyncThunk(
  "session/followUserStatus",
  async ({ userId, followId }) => {
    const response = await User.followUser(userId, followId);
    return response;
  }
);

export const unfollowUser = createAsyncThunk(
  "session/unfollowUserStatus",
  async ({ userId, followId }) => {
    const response = await User.unfollowUser(userId, followId);
    return response;
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLogin: true,
    loading: false,
    error: null,
    //events: [],
    calendar: [],
    following: [],
  },
  reducers: {},
  extraReducers: {
    // FETCH USER
    [fetchUserData.fulfilled]: (state, { payload }) => {
      state = { ...state, ...payload };
      state.error = null;
      state.loading = false;
      return state;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchUserData.pending]: state => {
      state.loading = true;
    },

    // FOLLOW USER
    [followUser.fulfilled]: (state, { payload }) => {
      state = { ...state, ...payload };
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
      state = { ...state, ...payload };
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
  },
});

export const sessionReducer = sessionSlice.reducer;
