import React from "react";
import "./menuItem.css";
const MeniItem = (props) => {
  let classes = [];
  if (props.active) {
    classes.push("active");
  }
  console.log(classes);
  return (
    <li className="menuItem">
      <a className={classes} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};
export default MeniItem;
