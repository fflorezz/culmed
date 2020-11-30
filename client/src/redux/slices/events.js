import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../API/events";

export const fetchAllEvents = createAsyncThunk(
  "events/fetchAllEventsStatus",
  async () => {
    const events = await API.getAllEvents();
    return events;
  }
);

export const fetchEventsByAuthor = createAsyncThunk(
  "events/fetchEventsByAuthorStatus",
  async userId => {
    const events = await API.getEventsByAuthor(userId);
    return events;
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    all: [],
    userEvents: [],
    event: null,
    comments: [],
    error: null,
    loading: false,
    exploreFilter: "todos",
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
  },
});

export const { setExploreFilter, clearEventCreated } = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
