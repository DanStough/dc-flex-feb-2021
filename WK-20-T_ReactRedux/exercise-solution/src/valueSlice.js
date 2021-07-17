import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

export const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    incrementValueByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementValueByAmount: (state, action) => {
      state.count -= action.payload;
    },
    overrideValue: (state, action) => {
      state.count = action.payload;
    },
  }
});

export const { incrementValueByAmount, decrementValueByAmount, overrideValue } = valueSlice.actions;

export const selectValue = (state) => state.value.count;

export default valueSlice.reducer;
