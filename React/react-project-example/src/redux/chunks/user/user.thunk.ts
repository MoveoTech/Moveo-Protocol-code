/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

import userAdapter from '../adapters/user.adapter';

export const getUserEmail = createAsyncThunk<
  string,
  string,
  { rejectValue: Error }
>(
  'user',
  async (
    accessToken,
    { rejectWithValue, fulfillWithValue },
  ): Promise<string | any> => {
    try {
      const response = await userAdapter.getUserEmail(accessToken);
      const { data } = response;
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
