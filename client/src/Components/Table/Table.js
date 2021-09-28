import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Daily Sales</span>
            </th>
            <th>
              <span>Monthly Sales</span>
            </th>
            <th>
              <span>Monthly Sales</span>
            </th>
            <th>
              <span>% Goal</span>
            </th>
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
