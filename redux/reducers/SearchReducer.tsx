import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  searchParams: null,
};

export const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase("addSearchParams", (state, action: any) => {
    state.searchParams = action.payload;
  })
  builder.addCase("clearSearchParams", (state) => {
    state.searchParams = null;
  })
});
