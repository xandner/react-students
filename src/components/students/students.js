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
            />
        })
    )
}
export default Students