import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerForm from './ProjectManagerForm';
import { startEditProjectManager, startRemoveProjectManager } from '../../../actions/team-build/capstoneProjectManagers';

const EditProjectManagerPage = (props) => {
    return (
        <div>
            <h1> Edit Project Manager </h1>
            <ProjectManagerForm
                projectManager={props.projectManager} 
                onSubmit={(projectManager) => {
                    props.startEditProjectManager(props.projectManager.id, projectManager);
                    props.history.push('/team/dashboard');
                }}
            />
            <button onClick={() => {
                props.startRemoveProjectManager({id: props.projectManager.id});
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

const mapDispatchToProps = (dispatch) => ({
    startEditProjectManager: (id, updates) => dispatch(startEditProjectManager(id, updates)),
    startRemoveProjectManager: ({id}) => dispatch(startRemoveProjectManager({id}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectManagerPage);