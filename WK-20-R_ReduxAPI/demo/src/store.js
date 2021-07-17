import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './valueSlice';
import colorReducer from './colorSlice';
import {dogApi} from './services/dog';

export const store = configureStore({
  reducer: {
    "value": valueReducer,
    "color": colorReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi.middleware),
});
