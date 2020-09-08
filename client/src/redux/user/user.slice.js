import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserStatus",
  async userId => {
    const response = await fetch(`http://localhost:5000/users/${userId}`);
    const userData = await response.json();
    return userData;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: { userId: null, events: [] },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.error = null;
      state.loading = false;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchUserData.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { getUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
