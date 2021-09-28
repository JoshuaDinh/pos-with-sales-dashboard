import React, { useState } from "react";
import "./form.css";

const Form = ({ updateFormData, formData }) => {
  return (
    <form className="form">
      <div className="form-info">
        <div className="form-header">
          <h4>Customer Information:</h4>
          <select>
            <option name="employee_id" value={"1"}>
              Employee
            </option>
            <option name="employee_id" value={"2"}>
              yui
            </option>
            <option name="employee_id" value={"3"}>
              joshua
            </option>
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
