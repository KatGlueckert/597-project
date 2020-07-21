import React from 'react';
import { connect } from 'react-redux';
import { addStudentSurvey } from '../../../actions/team-build/capstoneStudentSurveys';
import SurveyForm from './SurveyForm';

const NewSurveyPage = (props) => (
    <div>
        <h1>Student Survey</h1>
        <SurveyForm
            onSubmit={(survey) => {
                props.dispatch(addStudentSurvey(survey));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(NewSurveyPage);