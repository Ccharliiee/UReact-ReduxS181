import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterStore";
import authReducer from "./authStore";

const store = configureStore({
  reducer: { ctReducer: counterReducer, authReducer: authReducer },
});
export default store;
