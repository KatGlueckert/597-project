import React from 'react';
import { connect } from 'react-redux';

const ProjectDescription = ({project}) => (
    <div>
        {project ? 
            <div>
            <h1>{project.title}</h1>
            <p>Description: {project.description}</p>
            <p>Tags: {project.tags.map((tag) => (`| ${tag} |`))}</p>
            </div> : 
            <div><p>Please Select a project to get started.</p> </div> }
    </div>
);

const mapStateToProps = (state) => ({
    project: state.projects.find((project) => project.id === state.filters.project)
});

export default connect(mapStateToProps)(ProjectDescription);