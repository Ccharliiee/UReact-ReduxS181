import { createStore } from "redux";

const ctReduxReducer = (state = { cter: 0 }, action) => {
  if (action.type === "increase") {
    return { cter: state.cter + (isNaN(action.amount) ? 1 : action.amount) };
  } else if (action.type === "decrease") {
    return { cter: state.cter - (isNaN(action.amount) ? 1 : action.amount) };
  } else {
    return state;
  }
};

const ctStore = createStore(ctReduxReducer);

export default ctStore;
