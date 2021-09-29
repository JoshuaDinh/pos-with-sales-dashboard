import React from "react";
import "./confirmCheckOut.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";

const ConfirmCheckout = ({
  data,
  setConfirmCheckOut,
  formData,
  clearInvoiceDetails,
  resetFormData,
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(formData);

  const submitInvoice = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://pos-sales-dashboard.herokuapp.com/api/invoices",
        body,
        config
      );
      alert("invoice submited");
      clearInvoiceDetails(e);
      resetFormData({
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
  };
  return (
    <div className="confirm-checkout-bkg">
      <form
        className="confirm-checkout"
        onSubmit={(e) => submitInvoice(e, data)}
      >
        <h3 className="confirm-checkout-text">All sales are final..</h3>
        <p>Are you sure you want to proceed?</p>
        <div className="cart-checkout">
          <button
            onClick={() => setConfirmCheckOut(false)}
            className="cart-cancel-btn"
          >
            <h4>No</h4>
            <span>
              <BackspaceIcon className="cart-checkout-icon clart-clear-icon" />
            </span>
          </button>
          <button
            onSubmit={(e) => submitInvoice(e, data)}
            className="cart-checkout-btn"
          >
            <h4>Proceed To Checkout</h4>
            <ShoppingCartIcon className="cart-checkout-icon cart-sale-icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmCheckout;
