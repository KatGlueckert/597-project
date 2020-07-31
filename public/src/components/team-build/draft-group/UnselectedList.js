import React from 'react';
import { connect } from 'react-redux';
import unselectedStudets from '../../../selectors/team-build/unselectedStudents';
import UnselectedListItem from './UnselectedListItem';

const UnselectedList = ({students}) => (
    <div>
        <h3>Unselected Students</h3>
        {
            students.map((student) => (
                <UnselectedListItem {...student} key={student.id} />
            ))
        }
    </div>
);

const mapStateToProps = (state) => ({
    students: unselectedStudets(state.students, state.filters)
});

export default connect(mapStateToProps)(UnselectedList);