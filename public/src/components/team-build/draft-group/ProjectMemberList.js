import React from 'react';
import { connect } from 'react-redux';
import projectStudents from '../../../selectors/team-build/projectStuents';
import ProjectMemberListItem from './ProjectMemberListItem';

const ProjectMemberList = ({students}) => (
    <div className="content-container">
    <div className="list-header">
        <div className="show-for-desktop">Student</div>
        <div className="show-for-desktop">Rank</div>
    </div>
    { students.length > 0 ? students.map((student) => (
                <ProjectMemberListItem {...student} key={student.id} />)) :
                <p className="list-item">No students currently added</p>
            }
    </div>
);

const mapStateToProps = (state) => ({
    students: projectStudents(state.students, state.filters)
});

export default connect(mapStateToProps)(ProjectMemberList);