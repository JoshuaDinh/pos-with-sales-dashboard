import { DAILY_SUBSCRIPTIONS_DATA, MONTHLY_SUBSCRIPTIONS_DATA } from "./Types";
import axios from "axios";

export const fetchDailySubscriptionsData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/subscription-counts/daily");
    dispatch({ type: DAILY_SUBSCRIPTIONS_DATA, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
export const fetchMonthlySubscriptionsData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/sales/subscription-counts/monthly");
    dispatch({ type: MONTHLY_SUBSCRIPTIONS_DATA, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
