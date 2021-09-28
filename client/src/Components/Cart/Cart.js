import React, { useState } from "react";
import "./cart.css";
import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import Form from "../Form/Form";
import img from "../../imgs/1.png";

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
      <Form />
      <div className="cart-content">
        {data.subscription_name && (
          <div className="cart-item">
            <div className="cart-item-details">
              <h3>Subscription: {data?.subscription_name}</h3>
              <h5>
                + Revenue: <span className="green">{data?.revenue}</span>
              </h5>
              <h5>
                Speed Discount: <span className="red">{data?.speed}%</span>
              </h5>
            </div>
            <div className="cart-item-price">
              <h3>${data?.cost}.00</h3>
              <HighlightOffIcon
                className="cart-delete-icon"
                onClick={() => clearInvoiceDetails()}
              />
            </div>
          </div>
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
