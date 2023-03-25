import { INCREASE_COUNT, DESCREASE_COUNT } from "../constants/actionTypes";

const increaseCount = (id) => {
  return {
    type: INCREASE_COUNT,
    id,
  };
};

const decreaseCount = (id) => {
  return {
    type: DESCREASE_COUNT,
    id,
  };
};

export { increaseCount, decreaseCount };
