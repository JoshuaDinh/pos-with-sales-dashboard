import { combineReducers } from "redux";
import totalSalesData from "./totalSalesData";
import employeeSalesData from "./employeeSalesData";
import subscriptionsData from "./subscriptionsData";

export default combineReducers({
  totalSalesData,
  employeeSalesData,
  subscriptionsData,
});
