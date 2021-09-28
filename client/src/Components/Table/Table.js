import React, { useState, useEffect } from "react";
import "./table.css";
import axios from "axios";

const Table = () => {
  const [table, setTable] = useState([]);
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/sales");
      setTable(response.data);
    };
    fetchData();
  }, []);

  table.map((t) => {
    console.log(t);
  });
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
          {/* {tableData.map((t) => {
            return (
              <tr>
                <td>{t.employee_name}</td>
                <td>${t.subscription_price}</td>
                <td>$400,000</td>
                <td>$10,000,000</td>
                <td>40%</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
