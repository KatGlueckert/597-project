import React from 'react';
import { connect } from 'react-redux';
import { setProject } from '../../../actions/team-build/filters';

const ProjectFilter = (props) => (
    <div>
        <select
            value={props.projectFilter}
            onChange={(e) => {
                props.setProject(e.target.value);
            }}
        >
            {props.projects.map((project)=> (
                <option value={project.id} key={project.id}>{project.title}</option>
            ))}
        </select>
    </div>
);

const mapStateToProps = (state) => ({
    projects: state.projects,
    projectFilter: state.filters.project
});

const mapDispatchToProps =(dispatch) => ({
    setProject: (id) => dispatch(setProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFilter);