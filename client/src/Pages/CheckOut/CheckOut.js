import React, { useState } from "react";
import "./checkOut.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Cart from "../../Components/Cart/Cart";
import InventoryDisplay from "../../Components/InventoryDisplay/InventoryDisplay";

const CheckOut = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({});

  const handleInvoiceDetails = (data) => {
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
      <InventoryDisplay handleInvoiceDetails={handleInvoiceDetails} />
      <Cart data={invoiceDetails} clearInvoiceDetails={clearInvoiceDetails} />
    </div>
  );
};

export default CheckOut;
