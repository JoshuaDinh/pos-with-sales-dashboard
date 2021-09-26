import React from "react";
import "./cart.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = ({ details, handleClick }) => {
  console.log(details);
  return (
    <div className="cart">
      <div className="cart-top">
        <h2>Cart Items</h2>
        <div className="cart-reciept-info">
          <div className="cart-reciept-customer">
            <input className="cart-input" type="text" placeholder="Full Name" />
            <input className="cart-input" type="text" placeholder="Contact" />
          </div>
          <select>
            <option>Employee</option>
            <option>yui</option>
            <option>joshua</option>
          </select>
        </div>
      </div>
      <div className="cart-content">
        {details.map((detail) => {
          return (
            <div className="cart-item" key={detail.Subscription}>
              <div className="cart-item-details">
                <h3>Subscription: {detail.Subscription}</h3>
                <h5>
                  + Revenue: <span className="green">{detail.Revenue}</span>
                </h5>
                <h5>
                  Speed Discount: <span className="red">{detail.Speed}%</span>
                </h5>
              </div>
              <div className="cart-item-price">
                <h3>${detail.Cost}.00</h3>
                <HighlightOffIcon className="cart-delete-icon" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-checkout">
        <button onClick={handleClick}>
          Clear Order
          <span>
            <BackspaceIcon className="cart-checkout-icon clart-clear-icon" />
          </span>
        </button>
        <button>
          CheckOut{" "}
          <ShoppingCartIcon className="cart-checkout-icon cart-sale-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
