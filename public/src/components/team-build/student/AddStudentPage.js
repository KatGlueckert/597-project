import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import { startAddStudent } from '../../../actions/team-build/capstoneStudents';

const AddStudentPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Student</h1>
            </div>
        </div>
        <div className="content-container">
            <StudentForm
                onSubmit={(student) => {
                    props.startAddStudent(student);
                    props.history.push('/team/dashboard');
                }}
            />
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddStudent: (student) => dispatch(startAddStudent(student))
});

export default connect(undefined, mapDispatchToProps)(AddStudentPage);