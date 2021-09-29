import { combineReducers } from "redux";
import totalData from "./totalData";
import dailyEmployeeData from "./dailyData";

export default combineReducers({
  totalData,
  dailyEmployeeData,
});
