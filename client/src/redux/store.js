import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user.slice";
import { eventsReducer } from "./slices/events";

const rootReducer = { user: userReducer, events: eventsReducer };

const store = configureStore({ reducer: rootReducer });

export default store;
