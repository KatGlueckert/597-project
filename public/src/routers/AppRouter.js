import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddStudentPage from '../components/team-build/student/AddStudentPage';
import HomePage from '../components/HomePage';
import NewSurveyPage from '../components/team-build/survey/NewSurveyPage';
import NotFoundPage from '../components/NotFoundPage';
import StudentDashboardPage from '../components/team-build/student/StudentDashboardPage';
import EditStudentPage from '../components/team-build/student/EditStudentPage';
import TeamBuildHeader from '../components/team-build/TeamBuildHeader';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <TeamBuildHeader />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/team/survey" component={NewSurveyPage} />
                <Route path="/team/students" component={StudentDashboardPage} /> 
                <Route path="/team/addStudent" component={AddStudentPage} />
                <Route path="/team/editStudent/:id" component={EditStudentPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;