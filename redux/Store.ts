// store.js

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/UserReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userAccount } from "./reducers/AccountReducer";
import { searchReducer } from "./reducers/SearchReducer";
import { notificationReducer } from "./reducers/NotificationReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user","notification"],
};

const rootReducer = combineReducers({
  user: userReducer,
  userAccount:userAccount,
  search:searchReducer,
  notification:notificationReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

