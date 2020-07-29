import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddStudentPage from '../components/team-build/student/AddStudentPage';
import AddProjectPage from '../components/team-build/project/AddProjectPage';
import AddProjectManagerPage from '../components/team-build/project-manager/AddProjectManagerPage';
import AdminDashboardPage from '../components/team-build/AdminDashboardPage';
import EditStudentPage from '../components/team-build/student/EditStudentPage';
import EditProjectPage from '../components/team-build/project/EditProjectPage';
import EditProjectManagerPage from '../components/team-build/project-manager/EditProjectManagerPage';
import HomePage from '../components/HomePage';
import NewSurveyPage from '../components/team-build/survey/NewSurveyPage';
import NotFoundPage from '../components/NotFoundPage';
import SurveyThankYou from '../components/team-build/survey/SurveyThankYou';
import TeamBuildHeader from '../components/team-build/TeamBuildHeader';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <TeamBuildHeader />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/team/survey/:id" component={NewSurveyPage} />
                <Route path="/team/surveythankyou" component={SurveyThankYou} exact={true} />
                <Route path="/team/dashboard" component={AdminDashboardPage} /> 
                <Route path="/team/addStudent" component={AddStudentPage} />
                <Route path="/team/addProject" component={AddProjectPage} />
                <Route path="/team/addProjectManager" component={AddProjectManagerPage} />
                <Route path="/team/editStudent/:id" component={EditStudentPage} />
                <Route path="/team/editProject/:id" component={EditProjectPage} />
                <Route path='/team/editProjectManager/:id' component={EditProjectManagerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;