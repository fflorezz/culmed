import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as Calendar from "../../API/calendar";

export const fetchCalendar = createAsyncThunk(
  "calendar/fetchCalendarStatus",
  async userId => {
    const events = await Calendar.getEvents(userId);
    return events;
  }
);

export const addEventToCalendar = createAsyncThunk(
  "calendar/addEventToCalendarStatus",
  async ({ userId, eventId }) => {
    const response = await Calendar.addEvent(userId, eventId);
    return response;
  }
);

export const removeEventFromCalendar = createAsyncThunk(
  "calendar/removeEventFromCalendarStatus",
  async ({ userId, eventId }) => {
    const response = await Calendar.removeEvent(userId, eventId);
    return response;
  }
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [],
    error: null,
    loading: false,
    response: null,
  },
  reducers: {
    clearResponse: (state, action) => {
      state.response = null;
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

    // ADD EVENT TO CALENDAR
    [addEventToCalendar.fulfilled]: (state, { payload }) => {
      state.response = payload;
      state.error = null;
      state.loading = false;
      return state;
    },
    [addEventToCalendar.rejected]: (state, action) => {
      state.response = null;
      state.error = action.error;
      state.loading = false;
    },
    [addEventToCalendar.pending]: state => {
      state.loading = true;
    },

    // REMOVE EVENT FROM CALENDAR
    [removeEventFromCalendar.fulfilled]: (state, { payload }) => {
      state.response = payload;
      state.error = null;
      state.loading = false;
      return state;
    },
    [removeEventFromCalendar.rejected]: (state, action) => {
      state.response = null;
      state.error = action.error;
      state.loading = false;
    },
    [removeEventFromCalendar.pending]: state => {
      state.loading = true;
    },
  },
});
export const { clearResponse } = calendarSlice.actions;
export const calendarReducer = calendarSlice.reducer;
