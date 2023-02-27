import { createStore } from "redux";

const ctReduxReducer = (state = { cter: 0, toggle: true }, action) => {
  if (action.type === "increase") {
    return {
      cter: state.cter + (isNaN(action.amount) ? 1 : action.amount),
      toggle: state.toggle,
    };
  } else if (action.type === "decrease") {
    return {
      cter: state.cter - (isNaN(action.amount) ? 1 : action.amount),
      toggle: state.toggle,
    };
  } else if (action.type === "toggle") {
    return { toggle: !state.toggle, cter: state.cter };
  } else {
    return state;
  }
};

const ctStore = createStore(ctReduxReducer);

export default ctStore;
