import { TOTAL_MONTHLY, TOTAL_DAILY, TOTAL_YEARLY } from "./Types";
import axios from "axios";

export const fetchTotalMonthlyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/monthly-total");
    dispatch({ type: TOTAL_MONTHLY, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchTotalDailyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/daily-total");
    dispatch({ type: TOTAL_DAILY, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchTotalYearlyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/yearly-total");
    dispatch({ type: TOTAL_YEARLY, payload: response.data[0] });
  } catch (err) {
    console.error(err);
  }
};
