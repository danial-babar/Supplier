// store.js

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/UserReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import { userReducer } from "./reducers/UserReducer"
// import { thunk } from "redux-thunk"
// import storage from 'redux-persist/lib/storage';

// export const ReduxStore = configureStore({
//   reducer: combineReducers({
//     user: userReducer,

//   }),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
// })
