import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import { startAddStudent } from '../../../actions/team-build/capstoneStudents';

const AddStudentPage = (props) => (
    <div>
        <h1>Add Student</h1>
        <StudentForm
            onSubmit={(student) => {
                props.startAddStudent(student);
                props.history.push('/team/dashboard');
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddStudent: (student) => dispatch(startAddStudent(student))
});

export default connect(undefined, mapDispatchToProps)(AddStudentPage);