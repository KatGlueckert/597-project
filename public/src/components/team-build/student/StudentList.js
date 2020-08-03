import React from 'react';
import { connect } from 'react-redux';
import StudentListItem from './StudentListItem';

const StudentList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-desktop">Student</div>
            <div className="show-for-desktop"></div>
        </div>
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