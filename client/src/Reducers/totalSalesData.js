import {
  TOTAL_MONTHLY,
  TOTAL_DAILY,
  TOTAL_YEARLY,
  TOTAL_YEARLY_BY_MONTH,
} from "../Actions/Types";

const initialState = {
  monthlyData: 0,
  dailyData: 0,
  yearlyData: 0,
  yearlyDataByMonth: [],
};

const totalData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_MONTHLY:
      return { ...state, monthlyData: payload };
    case TOTAL_DAILY:
      return { ...state, dailyData: payload };
    case TOTAL_YEARLY:
      return { ...state, yearlyData: payload };
    case TOTAL_YEARLY_BY_MONTH:
      return { ...state, yearlyDataByMonth: payload };
    default:
      return state;
  }
};

export default totalData;
