import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const authSlice = createSlice({
  name: "authSlice",
  initialState: { authed: false },
  reducers: {
    login(state, action) {
      state.authed = true;
    },
    logout(state, action) {
      state.authed = false;
    },
  },
});

export const {
  increase: ctincrease,
  decrease: ctdecrease,
  toggle: ctoggle,
} = ctSlice.actions;

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: { ctReducer: ctSlice.reducer, authReducer: authSlice.reducer },
});
export default store;
