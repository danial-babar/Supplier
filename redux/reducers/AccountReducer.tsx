import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  userType: null,
};

export const userAccount = createReducer(initialState, (builder) => {
  builder
    .addCase("addUserType", (state, action: any) => {
      state.userType = action.payload;
    })
   
});
