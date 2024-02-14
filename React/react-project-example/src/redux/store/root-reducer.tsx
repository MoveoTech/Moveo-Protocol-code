import { combineReducers } from '@reduxjs/toolkit';
import { RootState } from './root-state';
import { userReducer } from '../chunks/user/user.slice';

const RootReducer = combineReducers<RootState>({
  userState: userReducer
});
export default RootReducer;
