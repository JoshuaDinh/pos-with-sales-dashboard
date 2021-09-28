import React, { useState } from "react";
import "./cart.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Form from "../Form/Form";
import CartContent from "../CartContent/CartContent";
import ConfirmCheckout from "../ConfirmCheckOut/ConfirmCheckout";

const Cart = ({ data, clearInvoiceDetails }) => {
  const [confirmCheckOut, setConfirmCheckOut] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address: "",
    subscription_name: "",
    subscription_id: "",
    employee_id: "",
  });

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const checkOut = (e, data) => {
    e.preventDefault();
    setFormData({
      ...formData,
      subscription_name: data.subscription_name,
      subscription_id: data.subscription_id,
    });
    setConfirmCheckOut(!confirmCheckOut);
  };

  const today = new Date();
  return (
    <div className="cart">
      <div className="cart-top">
        <h2>Cart Items</h2>
      </div>{" "}
      <Form updateFormData={updateFormData} formData={formData} />
      <div className="cart-content">
        {data.subscription_name && (
          <CartContent
            clearInvoiceDetails={clearInvoiceDetails}
            data={data}
            updateFormData={updateFormData}
          />
        )}
      </div>
      <form className="cart-checkout">
        <button
          onClick={() => clearInvoiceDetails()}
          className="cart-cancel-btn"
        >
          <h4> Clear Order</h4>
          <span>
            <BackspaceIcon className="cart-checkout-icon clart-clear-icon" />
          </span>
        </button>
        <button
          onClick={(e) => checkOut(e, data)}
          className="cart-checkout-btn"
        >
          <h4> CheckOut</h4>
          <ShoppingCartIcon className="cart-checkout-icon cart-sale-icon" />
        </button>
      </form>
      {confirmCheckOut && (
        <ConfirmCheckout
          setConfirmCheckOut={setConfirmCheckOut}
          clearInvoiceDetails={clearInvoiceDetails}
          formData={formData}
        />
      )}
    </div>
  );
};

export default Cart;
