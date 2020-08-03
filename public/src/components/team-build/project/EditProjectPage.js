import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './ProjectForm';
import { startEditProject, startRemoveProject } from '../../../actions/team-build/capstoneProjects';

const EditProjectPage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Project</h1>
                </div>
            </div>
            <div className="content-container">
                <ProjectForm
                    project={props.project} 
                    onSubmit={(project) => {
                        props.dispatch(startEditProject(props.project.id, project));
                        props.history.push('/team/dashboard');
                    }}
                />
                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveProject({id: props.project.id}));
                    props.history.push('/team/dashboard');
                }}> Remove Project</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        project: state.projects.find((project) => project.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditProjectPage);