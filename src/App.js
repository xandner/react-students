import React, { useState } from 'react';

import Students from './components/students/students';

function App() {
  const [students, setStudents] = useState([
    { id: 0, name: "ali", classNumber: 206, phone: "9014220328", email: "email.com" },
    { id: 1, name: "mamad", classNumber: 280, phone: "9014221358", email: "email.com" },
    { id: 2, name: "taghi", classNumber: 201, phone: "9014226358", email: "email.com" },
    { id: 3, name: "akbar", classNumber: 220, phone: "9014229358", email: "email.com" },
  ])
  const nameChangeHandler = (event, id) => {
    const studentIndex = students.findIndex(student => student.id === id)
    const student = { ...students[studentIndex] }
    student.name = event.target.value
    const newStudents = [...students]
    newStudents[studentIndex] = student
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error)
    }
  }
  const emailChangeHandler = (event, id) => {
    const studentIndex = students.findIndex(student => student.id === id)
    const student = { ...students[studentIndex] }
    student.email = event.target.value
    const newStudents = [...students]
    newStudents[studentIndex] = student
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error)
    }
  }
  const phoneChangeHandler = (event, id) => {
    const studentIndex = students.findIndex(student => student.id === id)
    const student = { ...students[studentIndex] }
    student.phone = event.target.value
    const newStudents = [...students]
    newStudents[studentIndex] = student
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error)
    }
  }
  const classNumberChangeHandler = (event, id) => {
    const studentIndex = students.findIndex(student => student.id === id)
    const student = { ...students[studentIndex] }
    student.classNumber = event.target.value
    const newStudents = [...students]
    newStudents[studentIndex] = student
    try {
      setStudents(newStudents);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Students
        studentsList={students}
        nameChange={nameChangeHandler}
        changeEmail={emailChangeHandler}
        changePhone={phoneChangeHandler}
        changeClassNumber={classNumberChangeHandler}
      />
    </div>
  );
}

export default App;
