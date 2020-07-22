import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerForm from './ProjectManagerForm';
import { editProjectManager, removeProjectManager } from '../../../actions/team-build/capstoneProjectManagers';

const EditProjectManagerPage = (props) => {
    return (
        <div>
            <h1> Edit Project Manager </h1>
            <ProjectManagerForm
                projectManager={props.projectManager} 
                onSubmit={(projectManager) => {
                    props.dispatch(editProjectManager(props.projectManager.id, projectManager));
                    props.history.push('/team/dashboard');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeProjectManager({id: props.projectManager.id}));
                props.history.push('/team/dashboard');
            }}> Remove </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        projectManager: state.projectManagers.find((projectManager) => projectManager.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditProjectManagerPage);