import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Daily Sales</th>
            <th>Monthly Sales</th>
            <th>Monthly Goal</th>
            <th>% Goal</th>
          </tr>
        </thead>
        {/*  */}
        <tbody>
          <tr>
            <td>Joshua Dinh</td>
            <td>$9,000</td>
            <td>$400,000</td>
            <td>$10,000,000</td>
            <td>40%</td>
          </tr>
          {/*  */}
          <tr>
            <td>Zung</td>
            <td>$9,000</td>
            <td>$400,000</td>
            <td>$10,000,000</td>
            <td>40%</td>
          </tr>{" "}
          <tr>
            <td>Yui</td>
            <td>$9,000</td>
            <td>$400,000</td>
            <td>$10,000,000</td>
            <td>40%</td>
          </tr>{" "}
          <tr>
            <td>Dominic</td>
            <td>$9,000</td>
            <td>$400,000</td>
            <td>$10,000,000</td>
            <td>40%</td>
          </tr>{" "}
          <tr>
            <td>Tien</td>
            <td>$9,000</td>
            <td>$400,000</td>
            <td>$10,000,000</td>
            <td>40%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
