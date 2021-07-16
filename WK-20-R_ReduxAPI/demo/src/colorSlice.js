import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: "black"
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  }
});

export const { changeColor } = colorSlice.actions;

export const selectColor = (state) => state.color.color;

export default colorSlice.reducer;
