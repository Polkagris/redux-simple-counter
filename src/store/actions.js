export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const doIncrementation = () => {
  return {
    type: INCREMENT,
  };
};

export const doDecrementation = () => {
  return {
    type: DECREMENT,
  };
};
