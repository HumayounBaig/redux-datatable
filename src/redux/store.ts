import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import datatableReducer from './datatableSlice';

export const store = configureStore({
  reducer: {
    datatable: datatableReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
