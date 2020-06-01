import React from "react";

const CounterForm = ({ counter, incrementCounter, decrementCounter }) => {
  console.log(decrementCounter);
  return (
    <div>
      <button onClick={() => decrementCounter()}>-</button>
      <div>{counter}</div>
      <button onClick={() => incrementCounter()}>+</button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counter: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounter: () => dispatch(doIncrementation()),
//     decrementCounter: () => dispatch(doDecrementation()),
//   };
// };

// export const Counter = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CounterForm);

export default CounterForm;
