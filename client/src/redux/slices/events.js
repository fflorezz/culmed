import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../API/events";
import { updateEvent } from "../slices/session";

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

export const addComment = createAsyncThunk(
  "events/addCommentStatus",
  async data => {
    const result = await API.addComment(data);
    return result;
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

    // UPDATE EVENT (Share with session slice)
    [updateEvent.fulfilled]: (state, { payload }) => {
      state.event = payload;
    },

    // ADD COMMENT
    [addComment.fulfilled]: (state, { payload }) => {
      state.event.Comments = [...state.event.Comments, payload];
      state.error = null;
      state.loading = false;
    },
    [addComment.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [addComment.pending]: state => {
      state.loading = true;
    },
  },
});

export const { setExploreFilter, clearEventCreated } = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
