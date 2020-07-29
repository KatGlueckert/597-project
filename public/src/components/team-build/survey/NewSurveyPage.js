import React from 'react';
import { connect } from 'react-redux';
import { startAddStudentSurvey } from '../../../actions/team-build/capstoneStudents';
import SurveyForm from './SurveyForm';

const NewSurveyPage = (props) => (
    <div>
        <h1>Student Survey for: {props.student.name}</h1>
        <SurveyForm
            onSubmit={(survey) => {
                props.startAddStudentSurvey(props.student.id, survey);
                props.history.push('/team/surveythankyou');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return{
        student: state.students.find((student) => student.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddStudentSurvey: (id, survey) => dispatch(startAddStudentSurvey(id, survey))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSurveyPage);