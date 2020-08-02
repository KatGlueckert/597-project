import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddProjectManagerToProject } from '../../../actions/team-build/capstoneProjectManagers';

const FinishDraftButton = ({projectManagers, projects, startAddProjectManagerToProject}) => (
    <div>
    <Link to='/team/draftSummary'>
    <button onClick={() => {
        projectManagers.map((projectManager) => {
            const randomNum = Math.floor(Math.random() * projects.length);
            const currentProj = projects[randomNum];
            startAddProjectManagerToProject(projectManager.id, currentProj.id);
            projects.splice(randomNum, 1);
        });
        console.log('completed');
    }}>Finish Draft</button>
    </Link>
    </div>
);

const mapStateToProps = (state) => ({
    projectManagers: state.projectManagers,
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
    startAddProjectManagerToProject: (id, projectId) => dispatch(startAddProjectManagerToProject(id, projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishDraftButton);

