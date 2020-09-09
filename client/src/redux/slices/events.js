import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvents } from "../../API/events";

export const fetchAllEvents = createAsyncThunk(
  "user/fetchAllEventsStatus",
  async userId => {
    const userData = await getAllEvents();
    return userData;
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    all: [],
  },
  reducers: {},
  extraReducers: {
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
  },
});

export const eventsReducer = eventsSlice.reducer;
