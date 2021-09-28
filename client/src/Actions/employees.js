import { EMPLOYEES } from "./Types";
import axios from "axios";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/employees");
    dispatch({ type: EMPLOYEES, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};
