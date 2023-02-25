import { connect } from "react-redux";

import Button from "react-bootstrap/Button";

import classes from "./Counter.module.css";
import { Component } from "react";

const mapStateToProps = (state) => {
  return { counterVal: state.cter };
};
const mapDispatchToProps = (Dispatch) => {
  return {
    increment: () => Dispatch({ type: "increment" }),
    decrement: () => Dispatch({ type: "decrement" }),
  };
};

class CounterClass extends Component {
  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux CounterClass</h1>
        <div className={classes.value}>{this.props.counterVal}</div>
        <div className="mb-4">
          <Button
            onClick={this.incrementHandler.bind(this)}
            variant="primary"
            size="lg"
          >
            increment
          </Button>{" "}
          <Button
            onClick={this.decrementHandler.bind(this)}
            variant="secondary"
            size="lg"
          >
            decrement
          </Button>{" "}
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
