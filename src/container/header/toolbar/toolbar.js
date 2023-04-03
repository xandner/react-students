import React from "react";
import "./toolbar.css";
import logo from "../../../components/logo/logo";
import Logo from "../../../components/logo/logo";
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <Logo />
      <nav>nav item</nav>
      <button>ورود</button>
    </header>
  );
};
export default Toolbar;
