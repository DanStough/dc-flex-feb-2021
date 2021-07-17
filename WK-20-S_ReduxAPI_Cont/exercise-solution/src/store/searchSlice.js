import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        q: "",
        rating: "all",
        limit: "20"
    }
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    modifySearch: (state, action) => {
      state.data = action.payload;
    },
  }
});

export const { modifySearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.data;

export default searchSlice.reducer;
