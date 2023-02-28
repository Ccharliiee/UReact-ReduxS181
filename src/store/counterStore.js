import { createSlice } from "@reduxjs/toolkit";

const ctSlice = createSlice({
  name: "ctrdxtk",
  initialState: { cter: 0, toggle: true },
  reducers: {
    increase(state, action) {
      state.cter = state.cter + (isNaN(action.payload) ? 1 : action.payload);
    },
    decrease(state, action) {
      state.cter = state.cter + (isNaN(action.payload) ? -1 : action.payload);
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const {
  increase: ctincrease,
  decrease: ctdecrease,
  toggle: ctoggle,
} = ctSlice.actions;

export default ctSlice.reducer;
