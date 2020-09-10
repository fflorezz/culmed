import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvents, getEventById } from "../../API/events";

export const fetchAllEvents = createAsyncThunk(
  "user/fetchAllEventsStatus",
  async userId => {
    const userData = await getAllEvents();
    return userData;
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
    events: [],
    event: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // FETCH ALL
    [fetchAllEvents.fulfilled]: (state, { payload }) => {
      state.events = payload;
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

    // FETCH EVEN BY ID
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
