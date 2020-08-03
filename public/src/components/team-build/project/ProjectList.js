import React from 'react';
import { connect } from 'react-redux';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => (
    <div className="content-container">
        <div className="list-header">
        <div className="show-for-desktop">Project</div>
        <div className="show-for-desktop">Company</div>
    </div>
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