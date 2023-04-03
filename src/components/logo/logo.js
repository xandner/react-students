import React from "react";
import logo from "../../assets/images/piruz.jpg";
import "./logo.css";
const Logo = () => {
  return (
    <div className="Logo">
      <img src={logo} alt="logo" />
    </div>
  );
};
export default React.memo(Logo);
