import { EMPLOYEES } from "../Actions/Types";

const initialState = [];

const employees = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EMPLOYEES:
      return [...state, payload];
    default:
      return state;
  }
};

export default employees;
