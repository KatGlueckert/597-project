import React from 'react';
import { connect } from 'react-redux';
import FinishDraftButton from './FinishDraftButton';
import unselectedStudets from '../../../selectors/team-build/unselectedStudents';
import UnselectedListItem from './UnselectedListItem';

const UnselectedList = ({students}) => (
    <div>
        <h3>Unselected Students</h3>
        {
            students.length > 0 ?
            students.map((student) => (
                <UnselectedListItem {...student} key={student.id} />
            )) :
            <div> 
            <p>All students are selected.</p>
            <FinishDraftButton />
            </div>
        }
    </div>
);

const mapStateToProps = (state) => ({
    students: unselectedStudets(state.students, state.filters)
});

export default connect(mapStateToProps)(UnselectedList);