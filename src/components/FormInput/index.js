import React from "react";
import {  FormInput1 } from "../../pages/Admin/AdminStyles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label>{label}</label>}

      <FormInput1
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
