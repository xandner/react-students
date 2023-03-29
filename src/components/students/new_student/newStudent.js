import React from "react";
import "./newStudent.css";
import Button from "../../UI/button/button";
import WithClass from "../../hoc/withClass";


const NewStudent = (props) => {
  const { studentNewName, studentEmail, studentClass, studentPhone } = props;
  const {
    studentNameHandler,
    studentEmailHandler,
    studentClassHandler,
    studentPhoneHandler,
    addStudent,
  } = props;
  return (
    <div className="newStudent">
      <h1>اضافه کردن دانش‌آموز</h1>
      <label>نام و نام خانوادگی</label>
      <input
        type={"text"}
        value={studentNewName}
        onChange={studentNameHandler}
      />
      <label>کلاس</label>
      <input
        type={"text"}
        value={studentClass}
        onChange={studentClassHandler}
      />
      <label>شماره تلفن</label>
      <input
        type={"text"}
        value={studentPhone}
        onChange={studentPhoneHandler}
      />
      <label>ایمیل</label>
      <input
        type={"email"}
        value={studentEmail}
        onChange={studentEmailHandler}
      />
      <br />
      <Button btnType={"success"} clicked={addStudent}>
        اضافه کردن
      </Button>
    </div>
  );
};
export default NewStudent;
