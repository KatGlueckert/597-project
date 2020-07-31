import React from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import { startAddStudentToProject } from '../../../actions/team-build/capstoneStudents';

const UnselectedListItem = ({name, rank, id, survey, projectId, startAddStudentToProject}) => (
    <div>
        <p>{name} -- {rank}</p>
        <Popup trigger={<button> See More </button>} modal>
        {close => (
        <div className="modal">
            <a className="close" onClick={close}>
            &times;
            </a>
            <div className="header"> Name: {name} </div>
            <div className="content">
            {" "}
                <p>Rank: {rank}</p>
                <p>Internships: {survey.experienceAtInternships}</p>
                <p>Subjects Interested In: {survey.subjectsInterestedIn}</p>
                <p>Strongest Categories {survey.strongestCatagories && survey.strongestCatagories.map((cat) => `| ${cat} |`)}</p>
                <p>Weakest Categories {survey.weakestCatagories && survey.weakestCatagories.map((cat) => `| ${cat} |`)}</p>
                <p>Master's Program Interested: {survey.mastersProgramInterest} </p>

            <br />
            <button
                onClick={() => {
                    startAddStudentToProject(id, projectId);
                    close();
                }}
            >Add To Project</button>
            <button>Back To List</button>
            </div>
        </div>
        )}
    </Popup>
    </div>
);

const mapStateToProps = (state) => ({
    projectId: state.filters.project
});

const mapDispatchToProps = (dispatch) => ({
    startAddStudentToProject: (id, projectId) => dispatch(startAddStudentToProject(id, projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UnselectedListItem);