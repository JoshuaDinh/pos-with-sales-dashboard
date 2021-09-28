import { TOTAL_MONTHLY, TOTAL_DAILY } from "./Types";
import axios from "axios";

export const fetchMonthlyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/Month");
    dispatch({ type: TOTAL_MONTHLY, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchDailyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/Today");
    dispatch({ type: TOTAL_DAILY, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
