import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startAddProject } from '../../../actions/team-build/capstoneProjects';

const AddProjectPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Project</h1>
            </div>
        </div>  
        <div className="content-container">
            <ProjectForm 
                onSubmit={(project) => {
                    props.startAddProject(project);
                    props.history.push('/team/dashboard');
                }}
            />
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddProject: (project) => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(AddProjectPage);