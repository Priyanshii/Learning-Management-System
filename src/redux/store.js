import { configureStore } from '@reduxjs/toolkit';
import coursesReducer, { initializeWebSocket } from './slices/coursesSlice';
import studentReducer from './slices/studentSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    student: studentReducer,
  },
});

store.dispatch(initializeWebSocket());