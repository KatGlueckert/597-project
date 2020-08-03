import React from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectDescription from './ProjectDescription';
import ProjectMemberList from './ProjectMemberList';


const ProjectSection = () => (
    <div className="content-container">
        <ProjectFilter />
        <ProjectDescription />
        <ProjectMemberList />
    </div>
);

export default ProjectSection;