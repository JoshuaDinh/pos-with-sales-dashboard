import React from "react";
import "./storeCardContainer.css";
import DataCard from "../DataCard/DataCard";

const StoreCardContainer = () => {
  return (
    <div className="storeCardContainer">
      <DataCard title="Todays Sales" amount="$10,000" percent="%90" />
      <DataCard
        title="Monthly Sales Total"
        amount="$10,000,000"
        percent="%90"
      />
      <DataCard title="Goal:" amount="$10,000" percent="%90" />
      <DataCard title="Todays Sales Leader" amount="$10,000" percent="%90" />
      <DataCard title="Monthly Sales Leader" amount="$10,000" percent="%90" />
    </div>
  );
};

export default StoreCardContainer;
