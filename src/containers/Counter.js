import { doIncrementation, doDecrementation } from "../store/actions";
import { connect } from "react-redux";
import CounterForm from "../components/CounterForm";

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(doIncrementation()),
    decrementCounter: () => dispatch(doDecrementation()),
  };
};

const CounterMap = connect(mapStateToProps, mapDispatchToProps)(CounterForm);

export default CounterMap;
