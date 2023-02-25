import { createStore } from "redux";

const ctReduxReducer = (state = { cter: 0 }, action) => {
  if (action.type === "increment") {
    return { cter: state.cter + 1 };
  } else if (action.type === "decrement") {
    return { cter: state.cter - 1 };
  } else {
    return state;
  }
};

const ctStore = createStore(ctReduxReducer);

export default ctStore;
