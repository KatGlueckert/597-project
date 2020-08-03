import React from 'react';
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import { startAddStudentToProject } from '../../../actions/team-build/capstoneStudents';

const UnselectedListItem = ({name, rank, id, survey, projectId, startAddStudentToProject}) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title">{name}</h3>
            <span className="list-item__subtitle">Rank: {rank}</span>
        </div>
        <div>
            <Popup trigger={<button className="button list-item__data"> See More </button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div> Name: {name} </div>
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
                        className="button"
                        onClick={() => {
                            startAddStudentToProject(id, projectId);
                            close();
                        }}
                    >Add To Project</button>
                    <button className="button button--secondary">Back To List</button>
                    </div>
                </div>
                )}
            </Popup>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    projectId: state.filters.project
});

const mapDispatchToProps = (dispatch) => ({
    startAddStudentToProject: (id, projectId) => dispatch(startAddStudentToProject(id, projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UnselectedListItem);