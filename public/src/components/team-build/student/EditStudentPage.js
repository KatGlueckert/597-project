import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import { startEditStudent, startRemoveStudent } from '../../../actions/team-build/capstoneStudents';

const EditStudentPage = (props) => {
    return (
        <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Student</h1>
            </div>
        </div>
        <div className="content-container">
            <StudentForm
                student={props.student}
                onSubmit={(student) => {
                    props.startEditStudent(props.student.id, student);
                    props.history.push('/team/dashboard');
                }}
            />
            <button className="button button--secondary" onClick={() => {
                props.startRemoveStudent({id: props.student.id});
                props.history.push('/team/dashboard');
            }} > Remove </button>
        </div>

        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        student: state.students.find((student) => student.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditStudent: (id, expense) => dispatch(startEditStudent(id, expense)),
    startRemoveStudent: (expense) => dispatch(startRemoveStudent(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudentPage);