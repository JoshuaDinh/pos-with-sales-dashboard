import React from "react";
import "./cart.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
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
        <div className="cart-item">
          <div className="cart-item-name">
            <h4>Oyster Perpetual 41</h4>
            <h5>Oyster, 41 mm Oystersteel</h5>
          </div>
          <div className="cart-item-price">
            <h3>$9,5900</h3>
            <HighlightOffIcon className="cart-delete-icon" />
          </div>
        </div>
        {/*  placeholders */}
        {/* <div className="cart-item">
          <div className="cart-item-name">
            <h4>Oyster Perpetual 41</h4>
            <h5>Oyster, 41 mm Oystersteel</h5>
          </div>
          <div className="cart-item-price">
            <h3>$9,5900</h3>
            <HighlightOffIcon className="cart-delete-icon" />
          </div>
        </div>
        <div className="cart-item">
          <div className="cart-item-name">
            <h4>Oyster Perpetual 41</h4>
            <h5>Oyster, 41 mm Oystersteel</h5>
          </div>
          <div className="cart-item-price">
            <h3>$9,5900</h3>
            <HighlightOffIcon className="cart-delete-icon" />
          </div>
        </div>{" "}
        <div className="cart-item">
          <div className="cart-item-name">
            <h4>Oyster Perpetual 41</h4>
            <h5>Oyster, 41 mm Oystersteel</h5>
          </div>
          <div className="cart-item-price">
            <h3>$9,5900</h3>
            <HighlightOffIcon className="cart-delete-icon" />
          </div>
        </div>{" "}
        <div className="cart-item">
          <div className="cart-item-name">
            <h4>Oyster Perpetual 41</h4>
            <h5>Oyster, 41 mm Oystersteel</h5>
          </div>
          <div className="cart-item-price">
            <h3>$9,5900</h3>
            <HighlightOffIcon className="cart-delete-icon" />
          </div>
        </div>{" "} */}
        {/*  */}
      </div>
      <div className="cart-checkout">
        <button>
          Clear Order{" "}
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
