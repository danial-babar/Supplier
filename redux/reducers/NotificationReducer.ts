import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  notifications: 0,
};

export const notificationReducer = createReducer(initialState, (builder) => {
  builder.addCase("addNotification", (state, action: any) => {
    state.notifications += 1;
  })
});
