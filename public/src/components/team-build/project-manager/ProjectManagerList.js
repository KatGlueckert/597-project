import React from 'react';
import { connect } from 'react-redux';
import ProjectManagerListItem from './ProjectManagerListItem';

const ProjectMangerList = (props) => (
    <div>
        <h1>Project Managers</h1>
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