import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  tempUser: null,
};

export const userReducer = createReducer(initialState, builder => {
  builder

    .addCase('saveUser', (state, action: any) => {
      state.user = action.payload;
    })
    .addCase('clearUser', state => {
      state.user = null;
    });
});
