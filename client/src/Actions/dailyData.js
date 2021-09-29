import { DAILY_DATA } from "./Types";
import axios from "axios";

export const fetchDailyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/Employee-Totals/Today");

    dispatch({ type: DAILY_DATA, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
