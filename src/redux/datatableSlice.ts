import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface InitialState {
  query: string;
  datatable: string,
}

const initialState: InitialState = {
  query: '',
  datatable: '',
};

export const datatableSlice = createSlice({
  name: 'datatable',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    }
  }
});

export const { setSearchQuery } = datatableSlice.actions;

export const getSearchQuery = (state: RootState) => state.datatable.query;

export default datatableSlice.reducer;