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

export const fetchEventById = createAsyncThunk(
  "events/fetchEventByIdStatus",
  async eventId => {
    const eventData = await API.getEventById(eventId);
    return eventData;
  }
);

export const createEvent = createAsyncThunk(
  "events/createEventStatus",
  async event => {
    const response = await API.createEvent(event);
    return response.status;
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
    exploreFilter: "Todos",
  },
  reducers: {
    setExploreFilter: (state, { payload }) => {
      state.exploreFilter = payload;
      return state;
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

    // CREATE EVENT
    [createEvent.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
    },
    [createEvent.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createEvent.pending]: state => {
      state.loading = true;
    },
  },
});

export const setExploreFilter = eventsSlice.actions.setExploreFilter;

export const eventsReducer = eventsSlice.reducer;
