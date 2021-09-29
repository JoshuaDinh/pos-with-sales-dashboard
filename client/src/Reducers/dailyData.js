import { DAILY_DATA } from "../Actions/Types";

const initialState = {
  data: [],
};

const dailySalesData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DAILY_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default dailySalesData;
