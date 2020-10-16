import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../../API/user";

export const fetchUserById = createAsyncThunk(
  "user/fetchUserByIdStatus",
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
    id: null,
    following: [],
    followers: [],
    followingList: [],
  },
  reducers: {},
  extraReducers: {
    // FETCH USER BY ID
    [fetchUserById.fulfilled]: (state, { payload }) => {
      state = { ...state, ...payload };
      state.error = null;
      state.loading = false;
      return state;
    },
    [fetchUserById.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [fetchUserById.pending]: state => {
      state.loading = true;
    },
  },
});

export const userReducer = userSlice.reducer;
