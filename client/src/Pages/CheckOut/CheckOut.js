import React, { useState } from "react";
import "./checkOut.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Cart from "../../Components/Cart/Cart";
import InventoryDisplay from "../../Components/InventoryDisplay/InventoryDisplay";

const HomePage = () => {
  const [invoiceDetails, setInvoiceDetails] = useState([]);

  const handleClick = (data) => {
    if (invoiceDetails[0].Subscription === data.Subscription) {
      alert("This Subscription Has Already Been Added");
    } else {
      setInvoiceDetails((invoiceDetails) => [...invoiceDetails, data]);
    }
  };

  console.log(invoiceDetails);
  return (
    <div className="checkOut">
      <Sidebar />
      <InventoryDisplay handleClick={handleClick} />
      <Cart details={invoiceDetails} handleClick={handleClick} />
    </div>
  );
};

export default HomePage;
