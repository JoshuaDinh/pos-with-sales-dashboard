import React from "react";
import "./cartContent.css";

export const CartContent = ({ data, clearInvoiceDetails, img }) => {
  return (
    <div className="cart-item">
      <img src={data?.img} className="cart-img" alt="#" />
      <div className="cart-item-content">
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
        </div>
      </div>
    </div>
  );
};

export default CartContent;
