import React from 'react';
import './students.css'

const Student = (props) => {
    return (
        <div className='students'>
            <label>شماره دانش آموزی: {props.id}</label>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={props.name}></input>
            <label> کلاس </label>
            <input type="text" value={props.classNumber}></input>
            <label>تلفن</label>
            <input type="text" value={props.phone}></input>
            <label>ایمیل</label>
            <input type="email" value={props.email}></input>
            <hr />
        </div>

    )
}
export default Student;