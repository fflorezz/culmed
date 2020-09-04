import { createReducer } from "@reduxjs/toolkit";

let INITIAL_STATE = {
  userId: 1,
};

let userReducer = createReducer(INITIAL_STATE, {});

export default userReducer;
