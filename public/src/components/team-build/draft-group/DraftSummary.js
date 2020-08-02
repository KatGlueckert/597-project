import React from 'react';
import { connect } from 'react-redux';

const DraftSummary = ({students, projectManagers, projects}) => (
    <div>
        <h1>Draft Summary</h1>
        {projects.map((project) => (
            <div key={`${project.id}div`}>
                <h3 key={project.id}>{project.title}</h3>
                <p key={`${project.id}pm`}>Project Manager: {projectManagers.find((projectManager) => projectManager.projectId === project.id).name}</p>
                <p key={`${project.id}label`}>Students:</p>
                <ul key={`${project.id}list`}>
                {students.filter((student) => student.projectId === project.id).map((student) => 
                    <li key={student.id}>{student.name}</li> 
                )}
                </ul>
            </div>
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    students: state.students,
    projectManagers: state.projectManagers,
    projects: state.projects
});

export default connect(mapStateToProps)(DraftSummary);