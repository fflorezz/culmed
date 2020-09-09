import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../../API/user";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserStatus",
  async userId => {
    const userData = await getUserData(userId);
    return userData;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUserData.fulfilled]: (state, { payload }) => {
      state = { ...state, ...payload };
      state.error = null;
      state.loading = false;
      return state;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchUserData.pending]: state => {
      state.loading = true;
    },
  },
});

export const userReducer = userSlice.reducer;
