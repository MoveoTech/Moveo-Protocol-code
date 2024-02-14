import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './root-reducer';

const store = configureStore({
  reducer: {
    rootReducer: RootReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
