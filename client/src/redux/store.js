import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.slice";

const rootReducer = { user: userReducer };

const store = configureStore({ reducer: rootReducer });

export default store;
