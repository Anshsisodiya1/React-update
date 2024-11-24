import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'Home', 
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {

    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = navSlice.actions;
export default navSlice.reducer;
