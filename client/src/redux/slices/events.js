import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllEvents,
  getEventById,
  getEventsByAuthor,
} from "../../API/events";

export const fetchAllEvents = createAsyncThunk(
  "user/fetchAllEventsStatus",
  async () => {
    const events = await getAllEvents();
    return events;
  }
);

export const fetchEventsByAuthor = createAsyncThunk(
  "user/fetchEventsByAuthorStatus",
  async userId => {
    const events = await getEventsByAuthor(userId);
    return events;
  }
);

export const fetchEventById = createAsyncThunk(
  "user/fetchEventByIdStatus",
  async eventId => {
    const eventData = await getEventById(eventId);
    return eventData;
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    all: [],
    userEvents: [],
    event: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // FETCH ALL
    [fetchAllEvents.fulfilled]: (state, { payload }) => {
      state.all = payload;
      state.error = null;
      state.loading = false;
    },
    [fetchAllEvents.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchAllEvents.pending]: state => {
      state.loading = true;
    },

    // FETCH EVENTS BY AUTHOR
    [fetchEventsByAuthor.fulfilled]: (state, { payload }) => {
      state.userEvents = payload;
      state.error = null;
      state.loading = false;
    },
    [fetchEventsByAuthor.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchEventsByAuthor.pending]: state => {
      state.loading = true;
    },

    // FETCH EVENT BY ID
    [fetchEventById.fulfilled]: (state, { payload }) => {
      state.event = payload;
      state.error = null;
      state.loading = false;
    },
    [fetchEventById.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchEventById.pending]: state => {
      state.loading = true;
    },
  },
});

export const eventsReducer = eventsSlice.reducer;
