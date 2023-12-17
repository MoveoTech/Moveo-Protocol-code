import { Reducer } from '@reduxjs/toolkit';
import { UserSlice } from '../../data/types/userSlice.type';

export interface RootState {
  userState: Reducer<UserSlice>;
}
