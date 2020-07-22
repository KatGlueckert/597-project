import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerForm from './ProjectManagerForm';
import { addProjectManager } from '../../../actions/team-build/capstoneProjectManagers';

const AddProjectManagerPage = (props) => (
    <div>
        <h1>Add Project Manager</h1>
        <ProjectManagerForm 
            onSubmit={(projectManager) => {
                props.dispatch(addProjectManager(projectManager));
                props.history.push('/team/dashboard');
            }}
        />
    </div>
);

export default connect()(AddProjectManagerPage);