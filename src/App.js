import React, { useEffect, useState } from 'react';

import Students from './components/students/students';
import Button from './components/UI/button/button';
import "./App.css";
import NewStudent from "./components/students/new_student/newStudent";

function App() {
  const [students, setStudents] = useState([
    {
      id: 0,
      name: "ali",
      classNumber: 206,
      phone: "9014220328",
      email: "email.com",
    },
    {
      id: 1,
      name: "mamad",
      classNumber: 280,
      phone: "9014221358",
      email: "email.com",
    },
    {
      id: 2,
      name: "taghi",
      classNumber: 201,
      phone: "9014226358",
      email: "email.com",
    },
    {
      id: 3,
      name: "akbar",
      classNumber: 220,
      phone: "9014229358",
      email: "email.com",
    },
  ]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [studentNewName, stStudentNewName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  useEffect(() => {
    setArrayHolder(students);
  }, []);
  const searchFilterFunction = (event) => {
    const searched = arrayHolder.filter((item) => {
      return (
        item.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
      );
    });
    setStudents(searched);
    setSearchBarValue(event.target.value);
  };
  const nameChangeHandler = (event, id) => {
    const studentIndex = students.findIndex((student) => student.id === id);
    const student = { ...students[studentIndex] };
    student.name = event.target.value;
    const newStudents = [...students];
    newStudents[studentIndex] = student;
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error);
    }
  };
  const emailChangeHandler = (event, id) => {
    const studentIndex = students.findIndex((student) => student.id === id);
    const student = { ...students[studentIndex] };
    student.email = event.target.value;
    const newStudents = [...students];
    newStudents[studentIndex] = student;
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error);
    }
  };
  const phoneChangeHandler = (event, id) => {
    const studentIndex = students.findIndex((student) => student.id === id);
    const student = { ...students[studentIndex] };
    student.phone = event.target.value;
    const newStudents = [...students];
    newStudents[studentIndex] = student;
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error);
    }
  };
  const classNumberChangeHandler = (event, id) => {
    const studentIndex = students.findIndex((student) => student.id === id);
    const student = { ...students[studentIndex] };
    student.classNumber = event.target.value;
    const newStudents = [...students];
    newStudents[studentIndex] = student;
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStudent = (index) => {
    const newStudents = [...students];
    newStudents.splice(index, 1);
    setStudents(newStudents);
  };
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const studentNameHandler = (event) => {
    stStudentNewName(event.target.value);
  };
  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  };
  const studentClassHandler = (event) => {
    setStudentClass(event.target.value);
  };
  const studentPhoneHandler = (event) => {
    setStudentPhone(event.target.value);
  };
  const addStudent = () => {
    const newStudentsState = [...students];
    newStudentsState.push({
      id: students.length,
      name: studentNewName,
      classNumber: studentClass,
      phone: studentPhone,
      email: studentEmail,
    });
    setStudents(newStudentsState);
    stStudentNewName("");
    setStudentClass("");
    setStudentEmail("");
    setStudentPhone("");
  };
  return (
    <div className="App">
      <NewStudent
        studentName={studentNewName}
        studentEmail={studentEmail}
        studentClass={studentClass}
        studentPhone={studentPhone}
        studentNameHandler={studentNameHandler}
        studentEmailHandler={studentEmailHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneHandler={studentPhoneHandler}
        addStudent={addStudent}
      />
      <input
        type={"text"}
        value={searchBarValue}
        onChange={searchFilterFunction}
      ></input>
      <br />
      <Button btnType={"success"} clicked={toggleHandler}>
        تغییر وضعیت نمایش
      </Button>
      <Students
        studentsList={students}
        nameChange={nameChangeHandler}
        changeEmail={emailChangeHandler}
        changePhone={phoneChangeHandler}
        changeClassNumber={classNumberChangeHandler}
        delete={deleteStudent}
        toggle={toggle}
      />
    </div>
  );
}

export default App;
