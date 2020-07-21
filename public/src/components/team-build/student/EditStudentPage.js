import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import { editStudent, removeStudent } from '../../../actions/team-build/capstoneStudents';

const EditStudentPage = (props) => {
    return (
        <div>
            <StudentForm
                student={props.student}
                onSubmit={(student) => {
                    props.dispatch(editStudent(props.student.id, student));
                    props.history.push('/team/students');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeStudent({id: props.student.id}));
                props.history.push('/team/students');
            }} > Remove </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        student: state.students.find((student) => student.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditStudentPage);