import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../API/events";
import { updateEvent } from "../slices/session";

export const fetchEventById = createAsyncThunk(
  "event/fetchEventByIdStatus",
  async eventId => {
    const eventData = await API.getEventById(eventId);
    return eventData;
  }
);

export const addComment = createAsyncThunk(
  "event/addCommentStatus",
  async data => {
    const result = await API.addComment(data);
    return result;
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: {
    event: null,
    comments: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    // FETCH EVENT BY ID
    [fetchEventById.fulfilled]: (state, { payload }) => {
      const { Comments, ...event } = payload;
      state.event = event;
      state.comments = Comments;
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

    // UPDATE EVENT (from session slice)
    [updateEvent.fulfilled]: (state, { payload }) => {
      state.event = payload;
    },

    // ADD COMMENT
    [addComment.fulfilled]: (state, { payload }) => {
      state.comments = [...state.comments, payload];
      state.commentError = null;
      state.commentLoading = false;
    },
    [addComment.rejected]: (state, action) => {
      state.commentError = action.error;
      state.commentLoading = false;
    },
    [addComment.pending]: state => {
      state.commentLoading = true;
    },
  },
});

export const eventReducer = eventSlice.reducer;
