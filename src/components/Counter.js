import { useSelector, useDispatch } from "react-redux";

import { ctincrease, ctdecrease, ctoggle } from "../store/counterStore";

import Button from "react-bootstrap/Button";

import classes from "./Counter.module.css";

const Counter = () => {
  const counterVal = useSelector((state) => state.ctReducer.cter);
  const toggleBool = useSelector((state) => state.ctReducer.toggle);
  const DispatchCt = useDispatch();

  const incrementHandler = () => {
    DispatchCt(ctincrease());
  };

  const increaseHandler = () => {
    DispatchCt(ctincrease(5));
  };

  const decrementHandler = () => {
    DispatchCt(ctdecrease());
  };

  const toggleCounterHandler = () => {
    DispatchCt(ctoggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleBool && (
        <div className={classes.value}>
          {counterVal}
          <div className="m-4">
            <Button onClick={incrementHandler} variant="success" size="lg">
              increment
            </Button>{" "}
            <Button onClick={increaseHandler} variant="success" size="lg">
              +5
            </Button>{" "}
            <Button onClick={decrementHandler} variant="danger" size="lg">
              decrement
            </Button>{" "}
          </div>
        </div>
      )}

      <button onClick={toggleCounterHandler} className="m-4">
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
