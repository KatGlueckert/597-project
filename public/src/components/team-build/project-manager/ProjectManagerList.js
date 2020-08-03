import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerListItem from './ProjectManagerListItem';

const ProjectMangerList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div>Project Manager </div>
        </div>
        {props.projectManagers.map((pm) => (
            <ProjectManagerListItem {...pm} key={pm.id} />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        projectManagers: state.projectManagers
    };
};

export default connect(mapStateToProps)(ProjectMangerList);