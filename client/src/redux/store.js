import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user.slice";
import { eventsReducer } from "./slices/events";
import { sessionReducer } from "./slices/session";
import { calendarReducer } from "./slices/calendar";

const rootReducer = {
  user: userReducer,
  events: eventsReducer,
  session: sessionReducer,
  calendar: calendarReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
