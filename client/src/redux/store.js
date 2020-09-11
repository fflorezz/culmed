import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user.slice";
import { eventsReducer } from "./slices/events";
import { sessionReducer } from "./slices/session";

const rootReducer = {
  user: userReducer,
  events: eventsReducer,
  session: sessionReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
