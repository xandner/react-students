import React from "react";
import "./newStudent.css";
import Button from "../../UI/button/button";

const NewStudent = () => {
  return (
    <div className="newStudent">
      <h1>اضافه کردن دانش‌آموز</h1>
      <label>نام و نام خانوادگی</label>
      <input type={"text"} />
      <label>کلاس</label>
      <input type={"text"} />
      <label>شماره تلفن</label>
      <input type={"text"} />
      <label>ایمیل</label>
      <input type={"email"} />
      <br />
      <Button btnType={"success"} clicked={() => alert("clicked")}>
        اضافه کردن
      </Button>
    </div>
  );
};
export default NewStudent;
