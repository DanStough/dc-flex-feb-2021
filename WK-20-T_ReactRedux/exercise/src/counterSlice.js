import { createSlice } from '@reduxjs/toolkit'

// WHAT DOES MY GLOBAL REDUX STORE LOOK LIKE
// const state = {
//     "counter": {
//         "number": 0
//     } 
// }


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("inside the reducer");
      state.number += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export default counterSlice.reducer
