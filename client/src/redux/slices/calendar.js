import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../API/calendar";

export const fetchCalendar = createAsyncThunk(
  "calendar/fetchCalendarStatus",
  async userId => {
    const events = await API.getCalendar(userId);
    return events;
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [],
    error: null,
    loading: false,
  },
  reducers: {
    setExploreFilter: (state, { payload }) => {
      state.exploreFilter = payload;
      return state;
    },
    clearEventCreated: (state, action) => {
      state.eventCreated = false;
    },
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

export const calendarReducer = calendarSlice.reducer;
