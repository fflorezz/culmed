import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../../API/user";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserDataStatus",
  async userId => {
    const userData = await getUserData(userId);
    return userData;
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isLogin: true,
    loading: false,
    error: null,
    events: [],
    calendar: [],
    following: [],
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

export const sessionReducer = sessionSlice.reducer;
