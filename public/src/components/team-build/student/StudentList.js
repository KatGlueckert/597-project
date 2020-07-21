import React from 'react';
import { connect } from 'react-redux';
import StudentListItem from './StudentListItem';

const StudentList = (props) => (
    <div>
        <h1>Student List</h1>
        {props.students.map((student) => (
            <StudentListItem {...student} key={student.id}  />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        //need to add selectors
        students: state.students
    };
};

export default connect(mapStateToProps)(StudentList);