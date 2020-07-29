import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startAddProject } from '../../../actions/team-build/capstoneProjects';

const AddProjectPage = (props) => (
    <div>
        <h1>Add Project</h1>
        <ProjectForm 
            onSubmit={(project) => {
                props.startAddProject(project);
                props.history.push('/team/dashboard');
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(AddProjectPage);