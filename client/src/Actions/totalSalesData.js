import {
  TOTAL_MONTHLY,
  TOTAL_DAILY,
  TOTAL_YEARLY,
  TOTAL_YEARLY_BY_MONTH,
} from "./Types";
import axios from "axios";

export const fetchTotalMonthlyData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://pos-sales-dashboard.herokuapp.com/api/sales/monthly-total"
    );
    dispatch({ type: TOTAL_MONTHLY, payload: response.data[0] });
  } catch (err) {
    console.error(err);
  }
};

export const fetchTotalDailyData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://pos-sales-dashboard.herokuapp.com/api/sales/daily-total"
    );
    dispatch({ type: TOTAL_DAILY, payload: response.data[0] });
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
export const fetchTotalYearlyDataByMonth = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/yearly-total/by-month");
    dispatch({ type: TOTAL_YEARLY_BY_MONTH, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
