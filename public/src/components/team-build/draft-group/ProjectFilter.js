import React from 'react';
import { connect } from 'react-redux';
import { setProject } from '../../../actions/team-build/filters';

const ProjectFilter = (props) => (
    <div className="content-ccontainer">
    <div className="input-group">
            <div className="input-group__item">
                <select
                className="select"
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
    </div>

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