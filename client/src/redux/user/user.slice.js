import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userId: null, events: [] },
  reducers: {
    getUserData: (state, action) => (state = action.payload),
  },
});

export const { getUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
