import React from "react";
import "./menuItems.css";
import MeniItem from "./menu_item/menuItem";
const MeniItems = () => {
  return (
    <ul className="MenuItems">
      <MeniItem link="/" active>
        صفحه اصلی
      </MeniItem>
      <MeniItem link="/">مشاهده دانش‌آموزان</MeniItem>
    </ul>
  );
};
export default MeniItems;
