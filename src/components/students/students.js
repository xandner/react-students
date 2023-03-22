import React from 'react';
import './students.css'

const Students = (props) => {
    return (
        <div className='students'>
            <label>شماره دانش آموزی:1</label>
            <label>نام و نام خانوادگی</label>
            <input type="text"></input>
            <label> کلاس </label>
            <input type="text"></input>
            <label>تلفن</label>
            <input type="number"></input>
            <label>ایمیل</label>
            <input type="email"></input>
        </div>
    )
}
export default Students