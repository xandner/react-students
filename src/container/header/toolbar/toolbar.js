import React from "react";
import "./toolbar.css";
import logo from "../../../components/logo/logo";
import Logo from "../../../components/logo/logo";
import MeniItems from "../menu_item/menuItems";
const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <Logo />
      <nav>
        <MeniItems />
      </nav>
      <button>ورود</button>
    </header>
  );
};
export default Toolbar;
