import { UserSlice } from '@/data/types/user.type';
import { createSlice } from '@reduxjs/toolkit';
import { getSDKLinks, getUserEmail } from '../thunks/user.thunk';



const initialState: UserSlice = {
  example: null,
  httpErr: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserEmail.fulfilled, (state, action) => {
      state.email = action.payload;
    });
    builder.addCase(getUserEmail.rejected, (state, action) => {
      state.httpErr = action.payload;
    });
  },
});

export const { setAccessToken, setUserEmail } = userSlice.actions;

export const userReducer = userSlice.reducer;
