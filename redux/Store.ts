import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./reducers/UserReducer"
import { thunk } from "redux-thunk"


export const ReduxStore = configureStore({
  reducer: combineReducers({
    user: userReducer,
    
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
})