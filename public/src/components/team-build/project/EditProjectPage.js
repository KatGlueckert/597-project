import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { editProject, removeProject } from '../../../actions/team-build/capstoneProjects';

const EditProjectPage = (props) => {
    return (
        <div>
            <h1> Edit Project </h1>
            <ProjectForm
                project={props.project} 
                onSubmit={(project) => {
                    props.dispatch(editProject(props.project.id, project));
                    props.history.push('/team/dashboard');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeProject({id: props.project.id}));
                props.history.push('/team/dashboard');
            }}> Remove Project</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        project: state.projects.find((project) => project.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditProjectPage);