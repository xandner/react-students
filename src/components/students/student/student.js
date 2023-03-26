import React from 'react';
import './students.css'
import Button from '../../UI/button/button';
import PropTypes from "prop-types";

const Student = (props) => {
    return (
        <div className='students'>
            <label>شماره دانش آموزی: {props.id}</label>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={props.name} onChange={props.nameChange}></input>
            <label> کلاس </label>
            <input type="text" value={props.classNumber} onChange={props.changeClassNumber}></input>
            <label>تلفن</label>
            <input type="text" value={props.phone} onChange={props.changePhone}></input>
            <label>ایمیل</label>
            <input type="email" value={props.email} onChange={props.changeEmail}></input>
            <label>
                حذف
            </label>
            <Button btnType={'danger'} clicked={props.delete}>
                حذف
            </Button>
            <hr />
        </div>

    )
}
export default React.memo(Student);
Student.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classNumber: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  delete: PropTypes.func.isRequired,
};