import React from 'react';
import { connect } from 'react-redux';
import { startRemoveStudentFromProject } from '../../../actions/team-build/capstoneStudents';

const ProjectMemberListItem = ({name, rank, id, startRemoveStudentFromProject}) =>(
    <div>
        <p>{name} -- {rank}</p>
        <button onClick={() => {
            startRemoveStudentFromProject({id});
        }}>Remove</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startRemoveStudentFromProject: ({ id }) => dispatch(startRemoveStudentFromProject({ id }))
});

export default connect(undefined, mapDispatchToProps)(ProjectMemberListItem);