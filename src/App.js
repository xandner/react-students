import React, { useState } from 'react';

import Students from './components/students/students';

function App() {
  const [students,setStudents]=useState([
    { id: 0, name: "ali", classNumber: 206, phone: "9014220328", email: "email.com" },
    { id: 1, name: "mamad", classNumber: 280, phone: "9014221358", email: "email.com" },
    { id: 2, name: "taghi", classNumber: 201, phone: "9014226358", email: "email.com" },
    { id: 3, name: "akbar", classNumber: 220, phone: "9014229358", email: "email.com" },
  ])
  return (
    <div className="App">
     <Students
      studentsList={students}
     />
    </div>
  );
}

export default App;
