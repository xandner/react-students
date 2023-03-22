import React from 'react';
import Student from './student/student';

const Students = (props) => {
    return (
        props.studentsList.map((student, index) => {
            return <Student
                key={index}
                id={student.id}
                name={student.name}
                phone={student.phone}
                email={student.email}
                classNumber={student.classNumber}
                nameChange={(event)=>props.nameChange(event,student.id)}
                changeEmail={(event)=>props.changeEmail(event,student.id)}
                changePhone={(event)=>props.changePhone(event,student.id)}
                changeClassNumber={(event)=>props.changeClassNumber(event,student.id)}
                delete={props.delete}
            />
        })
    )
}
export default Students