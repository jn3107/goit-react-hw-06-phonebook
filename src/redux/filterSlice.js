import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  inintialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
