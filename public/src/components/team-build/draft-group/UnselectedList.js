import React from 'react';
import { connect } from 'react-redux';
import FinishDraftButton from './FinishDraftButton';
import unselectedStudets from '../../../selectors/team-build/unselectedStudents';
import UnselectedListItem from './UnselectedListItem';

const UnselectedList = ({students}) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-desktop">Student</div>
            <div className="show-for-desktop"></div>
        </div>
        {
            students.length > 0 ?
            students.map((student) => (
                <UnselectedListItem {...student} key={student.id} />
            )) :
            <div> 
            <p className="list-item">All students are selected.</p>
            <FinishDraftButton />
            </div>
        }
    </div>
);

const mapStateToProps = (state) => ({
    students: unselectedStudets(state.students, state.filters)
});

export default connect(mapStateToProps)(UnselectedList);