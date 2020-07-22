import React from 'react';
import { connect } from 'react-redux';
import { addStudentSurvey } from '../../../actions/team-build/capstoneStudents';
import SurveyForm from './SurveyForm';

const NewSurveyPage = (props) => (
    <div>
        <h1>Student Survey for: {props.student.name}</h1>
        <SurveyForm
            onSubmit={(survey) => {
                props.dispatch(addStudentSurvey(props.student.id, survey));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return{
        student: state.students.find((student) => student.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(NewSurveyPage);