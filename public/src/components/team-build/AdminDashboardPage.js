import React from 'react';
import ProjectList from './project/ProjectList';
import ProjectManagerList from './project-manager/ProjectManagerList';
import StartDraftButton from './draft-group/StartDraftButton';
import StudentList from './student/StudentList';
import SendSurveysButton from './student/SendSurveysButton';

const AdminDashboardPage = () => (
    <div>
        <StudentList />
        <SendSurveysButton />
        <ProjectManagerList />
        <ProjectList />
        <StartDraftButton />
    </div>
);

export default (AdminDashboardPage);