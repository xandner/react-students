import React, { useEffect } from "react";
import Student from "./student/student";
import "./student/students.css";
import PropTypes from "prop-types";

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
export default React.memo(Students);
Students.prototypes = {
  studentsList: PropTypes.func.isRequired,
  nameChange: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeClassNumber: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};