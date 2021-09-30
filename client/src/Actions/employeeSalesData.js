import { DAILY_EMPLOYEE_DATA, MONTHLY_EMPLOYEE_DATA } from "./Types";
import axios from "axios";

export const fetchDailyEmployeeData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/employee/daily-totals");
    dispatch({ type: DAILY_EMPLOYEE_DATA, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
export const fetchMonthlyEmployeeData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/employee/monthly-total");
    dispatch({ type: MONTHLY_EMPLOYEE_DATA, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
