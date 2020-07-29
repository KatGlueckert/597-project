import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StartDraftButton = (props) => (
    <div>
    <Link to={`/team/draft`} >
        <button
            disabled={ props.projectManagers.length !== props.projects.length || !props.students}
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

export default connect(mapStateToProps)(StartDraftButton);