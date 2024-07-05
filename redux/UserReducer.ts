import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tempUser: null,
  leadId: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder

    .addCase("saveUser", (state, action: any) => {
      state.user = action.payload;
    })
    .addCase("clearUser", (state) => {
      state.user = null;
    })
    .addCase("saveLeadId", (state, action:any) => {   
      state.leadId = action.payload;
    });
}); 
