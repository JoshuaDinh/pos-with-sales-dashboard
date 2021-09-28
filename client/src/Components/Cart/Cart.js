import React, { useState } from "react";
import "./cart.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import Form from "../Form/Form";
// import img from "../../imgs/1.png";
import CartContent from "../CartContent/CartContent";

const Cart = ({ data, clearInvoiceDetails }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    address: "",
    subscription_name: "",
    subscription_id: "",
    employee_id: "5",
  });

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(formData);

  const submitInvoice = async (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      subscription_name: data.subscription_name,
      subscription_id: data.subscription_id,
    });
    try {
      await axios.post("/api/invoices", body, config);
      alert("invoice submited");
    } catch (err) {
      console.log(err);
      alert(err);
    }
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
          <CartContent clearInvoiceDetails={clearInvoiceDetails} data={data} />
        )}
      </div>
      <form
        className="cart-checkout"
        onSubmit={(event) => submitInvoice(event)}
      >
        <button onClick={() => clearInvoiceDetails()}>
          <h4> Clear Order</h4>
          <span>
            <BackspaceIcon className="cart-checkout-icon clart-clear-icon" />
          </span>
        </button>
        <button onSubmit={(event) => submitInvoice(event)}>
          <h4> CheckOut</h4>
          <ShoppingCartIcon className="cart-checkout-icon cart-sale-icon" />
        </button>
      </form>
    </div>
  );
};

export default Cart;
