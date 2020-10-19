import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../../API/user";
import * as Follow from "../../API/follow";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async userId => {
    const userData = await getUserData(userId);
    const { following, followers } = await Follow.getFollowersandFollowings(
      userId
    );
    userData.following = following;
    userData.followers = followers;
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
  },
  reducers: {},
  extraReducers: {
    // FETCH USER DATA
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
