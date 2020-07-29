import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerForm from './ProjectManagerForm';
import { startAddProjectManager } from '../../../actions/team-build/capstoneProjectManagers';

const AddProjectManagerPage = (props) => (
    <div>
        <h1>Add Project Manager</h1>
        <ProjectManagerForm 
            onSubmit={(projectManager) => {
                props.startAddProjectManager(projectManager);
                props.history.push('/team/dashboard');
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddProjectManager: (projectManager) => dispatch(startAddProjectManager(projectManager))
})

export default connect(undefined, mapDispatchToProps)(AddProjectManagerPage);