import React from 'react';
import ProjectManagerList from './project-manager/ProjectManagerList';
import StudentList from './student/StudentList';
import SendSurveysButton from './student/SendSurveysButton';

const AdminDashboardPage = () => (
    <div>
        <StudentList />
        <SendSurveysButton />
        <ProjectManagerList />
    </div>
);

export default (AdminDashboardPage);