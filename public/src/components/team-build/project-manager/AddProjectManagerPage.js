import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerForm from './ProjectManagerForm';
import { startAddProjectManager } from '../../../actions/team-build/capstoneProjectManagers';

const AddProjectManagerPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Project Manager</h1>
            </div>
        </div>
        <div className="content-container">
            <ProjectManagerForm 
                onSubmit={(projectManager) => {
                    props.startAddProjectManager(projectManager);
                    props.history.push('/team/dashboard');
                }}
            />  
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddProjectManager: (projectManager) => dispatch(startAddProjectManager(projectManager))
})

export default connect(undefined, mapDispatchToProps)(AddProjectManagerPage);