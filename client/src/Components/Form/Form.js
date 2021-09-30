import React, { useState, useEffect } from "react";
import "./form.css";
import axios from "axios";

const Form = ({ updateFormData, formData }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/employees");
        setEmployees(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <form className="form">
      <div className="form-info">
        <div className="form-header">
          <h4>Customer Information:</h4>
          <select
            name="employee_id"
            onChange={updateFormData}
            value={formData.employee_name}
          >
            <option>Select Employee</option>
            {employees &&
              employees?.map((e, idx) => {
                return (
                  <option key={idx} value={e.employee_id}>
                    {e.employee_name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-customer">
          <input
            className="form-input"
            type="text"
            placeholder="First Name"
            name="first_name"
            value={formData?.first_name}
            onChange={updateFormData}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={formData?.last_name}
            onChange={updateFormData}
          />
          <input
            className="form-input"
            type="phone"
            placeholder="Phone Number"
            name="phone_number"
            value={formData?.phone_number}
            onChange={updateFormData}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData?.email}
            onChange={updateFormData}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Address"
            name="address"
            value={formData?.address}
            onChange={updateFormData}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
