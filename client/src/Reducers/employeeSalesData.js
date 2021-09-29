import { DAILY_EMPLOYEE_DATA, MONTHLY_EMPLOYEE_DATA } from "../Actions/Types";

const initialState = {
  daily: [],
  monthly: [],
};

const employeeSalesData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DAILY_EMPLOYEE_DATA:
      return { ...state, daily: payload };
    case MONTHLY_EMPLOYEE_DATA:
      return { ...state, monthly: payload };
    default:
      return state;
  }
};

export default employeeSalesData;
