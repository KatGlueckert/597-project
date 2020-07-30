import React from 'react';
import { connect } from 'react-redux';
import projectStudents from '../../../selectors/team-build/projectStuents';
import ProjectMemberListItem from './ProjectMemberListItem';

const ProjectMemberList = ({students}) => (
    <div>
        <h3>Project Members</h3>
        { students.length > 0 ? students.map((student) => (
            <ProjectMemberListItem {...student} key={student.id} />)) :
            <p>No students currently added</p>
        }
    </div>
);

const mapStateToProps = (state) => ({
    students: projectStudents(state.students, state.filters)
});

export default connect(mapStateToProps)(ProjectMemberList);