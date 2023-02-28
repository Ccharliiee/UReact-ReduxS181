import { createSlice } from "@reduxjs/toolkit";

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

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
