import React from "react";
import "./form.css";
import { connect } from "react-redux";

const Form = ({ updateFormData, formData, employees }) => {
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
            {employees[0]?.map((e, idx) => {
              return (
                <option key={idx} value={e.employee_id}>
                  {e.employee_name}
                </option>
              );
            })}
          </select>
        </div>
        {employees[0]?.map((e) => {})}
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

const mapStateToProps = (state) => {
  return {
    employees: state.employees,
  };
};
export default connect(mapStateToProps)(Form);
