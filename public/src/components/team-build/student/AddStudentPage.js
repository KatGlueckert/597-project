import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import { addStudent } from '../../../actions/team-build/capstoneStudents';

const AddStudentPage = (props) => (
    <div>
        <h1>Add Student</h1>
        <StudentForm
            onSubmit={(student) => {
                props.dispatch(addStudent(student));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddStudentPage);