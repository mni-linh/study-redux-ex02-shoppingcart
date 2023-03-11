import { INCREASE_COUNT, DESCREASE_COUNT } from "../constants/actionTypes";

const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  };
};

const decreaseCount = () => {
  return {
    type: DESCREASE_COUNT,
  };
};

export { increaseCount, decreaseCount };
