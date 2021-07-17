import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './valueSlice';
import colorReducer from './colorSlice';

export const store = configureStore({
  reducer: {
    value: valueReducer,
    color: colorReducer
  },
});
