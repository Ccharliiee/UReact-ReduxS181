import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

import classes from "./Counter.module.css";

const Counter = () => {
  const counterVal = useSelector((state) => state.cter);
  const DispatchCt = useDispatch();

  const incrementHandler = () => {
    DispatchCt({ type: "increase" });
  };

  const increaseHandler = () => {
    DispatchCt({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    DispatchCt({ type: "decrease" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterVal}</div>
      <div className="mb-4">
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
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
