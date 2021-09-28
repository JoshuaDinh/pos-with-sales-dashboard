import { SUBMIT_INVOICE } from "./Types";
import axios from "axios";

export const submitInvoice = (
  body,
  config,
  setFormData,
  e,
  setConfirmCheckOut,
  clearInvoiceDetails
) => async (dispatch) => {
  e.preventDefault();
  try {
    await axios.post("/api/invoices", body, config);
    alert("invoice submited");
    clearInvoiceDetails(e);
    setFormData({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      address: "",
      subscription_name: "",
      subscription_id: "",
      subscription_price: "",
      employee_id: "",
    });
    setConfirmCheckOut(false);
  } catch (err) {
    console.log(err);
    alert(err);
  }

  dispatch({ type: SUBMIT_INVOICE, payload: body });
};
