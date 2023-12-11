import { combineReducers } from '@reduxjs/toolkit';
import { RootState } from './root-state';
import { stepperReducer } from '../slices/stepper.slice';
import { integrationReducer } from '../slices/integration.slice';
import { userReducer } from '../slices/user.slice';
import { visualsReducer } from '../slices/visuals.slice';

const RootReducer = combineReducers<RootState>({
  stepperState: stepperReducer,
  integrationState: integrationReducer,
  userState: userReducer,
  visualState: visualsReducer,
});
export default RootReducer;
