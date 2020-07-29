import React from 'react';
import ProjectList from './project/ProjectList';
import ProjectManagerList from './project-manager/ProjectManagerList';
import StudentList from './student/StudentList';
import SendSurveysButton from './student/SendSurveysButton';

const AdminDashboardPage = () => (
    <div>
        <StudentList />
        <SendSurveysButton />
        <ProjectManagerList />
        <ProjectList />
    </div>
);

export default (AdminDashboardPage);