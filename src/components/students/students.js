import React, { useEffect } from "react";
import Student from "./student/student";
import "./student/students.css";

const Students = (props) => {
  useEffect(() => {
    console.log("changed");
  }, [props.studentsList]);
  let studentsList = props.studentsList.map((student, index) => {
    return (
      <Student
        key={index}
        id={student.id}
        name={student.name}
        phone={student.phone}
        email={student.email}
        classNumber={student.classNumber}
        nameChange={(event) => props.nameChange(event, student.id)}
        changeEmail={(event) => props.changeEmail(event, student.id)}
        changePhone={(event) => props.changePhone(event, student.id)}
        changeClassNumber={(event) =>
          props.changeClassNumber(event, student.id)
        }
        delete={props.delete}
      />
    );
  });
  if (props.toggle) {
    return <div className="student-section">{studentsList}</div>;
  }
  return props.studentsList.map((student, index) => {
    return studentsList;
  });
};
export default Students;
