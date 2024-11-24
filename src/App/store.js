import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../Features/navslice'
import studentReducer from '../Features/studentSlice';

 export const store = configureStore({
  reducer: {
    navigation: navReducer, 
    Students: studentReducer,
  },
});

