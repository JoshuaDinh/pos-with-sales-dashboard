import React, { useEffect } from "react";
import "./cartContent.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import img from "../../imgs/1.png";

export const CartContent = ({ data, clearInvoiceDetails }) => {
  return (
    <div className="cart-item">
      <img src={img} className="cart-img" />
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
          <HighlightOffIcon
            className="cart-delete-icon"
            onClick={() => clearInvoiceDetails()}
          />
        </div>
      </div>
    </div>
  );
};

export default CartContent;
