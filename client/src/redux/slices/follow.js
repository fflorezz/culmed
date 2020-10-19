import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as Follow from "../../API/follow";

export const fetchfollowersAndFollowings = createAsyncThunk(
  "calendar/fetchfollowersAndFollowings",
  async userId => {
    const followersAndFollowings = await Follow.getFollowersandFollowings(
      userId
    );
    return followersAndFollowings;
  }
);

const followSlice = createSlice({
  name: "follow",
  initialState: {
    following: [],
    followers: [],
    error: null,
    loading: false,
  },

  extraReducers: {
    // FETCH CALENDAR
    [fetchCalendar.fulfilled]: (state, { payload }) => {
      state.events = payload;
      state.error = null;
      state.loading = false;
    },
    [fetchCalendar.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchCalendar.pending]: state => {
      state.loading = true;
    },
  },
});

export const followReducer = followSlice.reducer;
