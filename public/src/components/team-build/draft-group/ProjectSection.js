import React from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectDescription from './ProjectDescription';
import ProjectMemberList from './ProjectMemberList';


const ProjectSection = () => (
    <div>
        <ProjectFilter />
        <ProjectDescription />
        <ProjectMemberList />
    </div>
);

export default ProjectSection;