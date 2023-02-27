import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

import classes from "./Counter.module.css";

const Counter = () => {
  const counterVal = useSelector((state) => state.cter);
  const toggleBool = useSelector((state) => state.toggle);
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

  const toggleCounterHandler = () => {
    DispatchCt({ type: "toggle" });
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
