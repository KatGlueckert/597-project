import React from 'react';
import { connect } from 'react-redux';
import { startRemoveStudentFromProject } from '../../../actions/team-build/capstoneStudents';

const ProjectMemberListItem = ({name, rank, id, startRemoveStudentFromProject}) =>(
    <div className="list-item">
        <div>
            <h3 className="list-item__title">{name}</h3>
            <span className="list-item__subtitle">Rank: {rank}</span>
        </div>
        <div>
            <button className=" list-item__data button button--secondary" onClick={() => {
                startRemoveStudentFromProject({id});
            }}>Remove</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startRemoveStudentFromProject: ({ id }) => dispatch(startRemoveStudentFromProject({ id }))
});

export default connect(undefined, mapDispatchToProps)(ProjectMemberListItem);