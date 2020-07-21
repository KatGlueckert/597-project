import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AddStudentPage from '../components/team-build/student/AddStudentPage';
import HomePage from '../components/HomePage';
import NewSurveyPage from '../components/team-build/survey/NewSurveyPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/team/survey" component={NewSurveyPage} />
                <Route path="/team/addStudent" component={AddStudentPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;