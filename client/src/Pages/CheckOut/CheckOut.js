import React, { useState } from "react";
import "./checkOut.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Cart from "../../Components/Cart/Cart";
import InventoryDisplay from "../../Components/InventoryDisplay/InventoryDisplay";

const CheckOut = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({});

  const handleClick = (data) => {
    setInvoiceDetails(data);
  };
  const clearInvoiceDetails = () => {
    setInvoiceDetails({
      subscription: "",
      cost: "",
      speed: "",
      revenue: "",
      subscription_id: "",
    });
  };

  return (
    <div className="checkOut">
      <Sidebar />
      <InventoryDisplay handleClick={handleClick} />
      <Cart data={invoiceDetails} clearInvoiceDetails={clearInvoiceDetails} />
    </div>
  );
};

export default CheckOut;
