import React from "react";
import "./Login.css";
const Login = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Login;
