import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProject } from '../../../actions/team-build/filters';

const StartDraftButton = (props) => (
    <div className="content-container">
    <Link to={`/team/draft`} >
        <button
            className="button"
            disabled={ props.projectManagers.length !== props.projects.length || !props.students || !props.projects || props.students.filter(({surveyStatus}) => !surveyStatus).length > 0}
            onClick={() => {
                props.setProject(props.projects[0].id)
            }}
        > Start Draft </button>
    </Link>
    </div>
);

const mapStateToProps = (state) => (
    {
        students: state.students,
        projectManagers: state.projectManagers,
        projects: state.projects
    }
);

const mapDispatchToProps = (dispatch) => ({
    setProject: (project) => dispatch(setProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartDraftButton);