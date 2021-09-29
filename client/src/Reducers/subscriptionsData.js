import {
  DAILY_SUBSCRIPTIONS_DATA,
  MONTHLY_SUBSCRIPTIONS_DATA,
} from "../Actions/Types";

const initialState = {
  daily: [],
  monthly: [],
};

const subscriptionsData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DAILY_SUBSCRIPTIONS_DATA:
      return { ...state, daily: payload };
    case MONTHLY_SUBSCRIPTIONS_DATA:
      return { ...state, monthly: payload };
    default:
      return state;
  }
};

export default subscriptionsData;
