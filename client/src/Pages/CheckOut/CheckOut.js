import React, { useState } from "react";
import "./checkOut.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Cart from "../../Components/Cart/Cart";
import InventoryDisplay from "../../Components/InventoryDisplay/InventoryDisplay";

const HomePage = () => {
  const [invoiceDetails, setInvoiceDetails] = useState([]);

  const handleClick = (data) =>
    setInvoiceDetails((invoiceDetails) => [...invoiceDetails, data]);

  console.log(invoiceDetails);
  return (
    <div className="checkOut">
      <Sidebar />
      <InventoryDisplay handleClick={handleClick} />
      <Cart details={invoiceDetails} />
    </div>
  );
};

export default HomePage;
