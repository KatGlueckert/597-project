import React from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';

const onSubmitSurveys = ({students}) => {
    const service_id = 'default_service';
    const template_id = 'capstone_student_survey';
    const user_id = 'user_n9OYj4Fu2r3PzS5wfvIE1';

    students.map(({name, email, id}) =>{
        emailjs.send(
            service_id,
            template_id,
            {
                name,
                email,
                link: `localhost:8080/team/survey/${id}`
            },
            user_id
        );
        setTimeout(() => {console.log("email sent!"), 1000});
    });
};

const SubmitSurveysButton = (props) => (
    <div>
        <button onClick={(e) => onSubmitSurveys(props)}> Send Out Surveys to {props.students.length} students </button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        students: state.students
    };
};

export default connect(mapStateToProps)(SubmitSurveysButton);