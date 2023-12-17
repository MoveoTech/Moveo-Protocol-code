import { createSlice } from '@reduxjs/toolkit';
import { getUserEmail } from './user.thunk';
import { UserSlice } from '../../../data/types/userSlice.type';

const initialState: UserSlice = {
  email: null,
  httpErr: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserEmail.fulfilled, (state, action) => {
      state.email = action.payload;
    });
    builder.addCase(getUserEmail.rejected, (state, action) => {
      state.httpErr = action.payload;
    });
  }
});

export const { setUserEmail } = userSlice.actions;

export const userReducer = userSlice.reducer;
