import React, { useState } from "react";
import "./checkOut.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Cart from "../../Components/Cart/Cart";
import InventoryDisplay from "../../Components/InventoryDisplay/InventoryDisplay";
import MobileNav from "../../Components/MobileNav/MobileNav";

const CheckOut = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [mobileCart, setMobileCart] = useState(false);

  const handleInvoiceDetails = (data) => {
    setInvoiceDetails(data);
    setMobileCart(!mobileCart);
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
      <MobileNav />
      <Sidebar />
      <InventoryDisplay handleInvoiceDetails={handleInvoiceDetails} />
      <Cart
        data={invoiceDetails}
        clearInvoiceDetails={clearInvoiceDetails}
        mobileCart={mobileCart}
      />
    </div>
  );
};

export default CheckOut;
