import React from "react";
import "./table.css";
import numeral from "numeral";
const Table = ({ dataSet }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>
              <span>Name</span>
            </th>
            <th>
              <span>Title</span>
            </th>
            <th>
              <span>Monthly Sales</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSet.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.employee_name}</td>
                <td>{data.employee_title}</td>
                <td>
                  {numeral(data["SUM(subscription_price)"]).format("$0,0")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
