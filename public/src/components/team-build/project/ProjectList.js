import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => (
    <div>
        <h1>Projects</h1>
        {props.projects.map((project) => (
            <ProjectListItem {...project} key={project.id} />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps)(ProjectList);