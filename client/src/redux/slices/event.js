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
  async commentData => {
    const result = await API.addComment(commentData);
    return result;
  }
);

export const deleteComment = createAsyncThunk(
  "event/deleteCommentStatus",
  async commentData => {
    const result = await API.deleteComment(commentData);
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
      state.commentsError = null;
      state.commentsLoading = false;
    },
    [addComment.rejected]: (state, action) => {
      state.commentsError = action.error;
      state.commentsLoading = false;
    },
    [addComment.pending]: state => {
      state.commentsLoading = true;
    },

    // DELETE COMMENT
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.comments = state.comments.filter(c => c.id !== payload.commentId);
      state.commentsError = null;
      state.commentsLoading = false;
    },
    [deleteComment.rejected]: (state, action) => {
      state.commentsError = action.error;
      state.commentsLoading = false;
    },
    [deleteComment.pending]: state => {
      state.commentsLoading = true;
    },
  },
});

export const eventReducer = eventSlice.reducer;
