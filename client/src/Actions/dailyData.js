import { DAILY_DATA } from "./Types";
import axios from "axios";

export const fetchDailyEmployeeData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/employee/daily-totals");
    dispatch({ type: DAILY_DATA, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
