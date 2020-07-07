import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from '../components/HomePage';
import StudentSurvey from '../components/team-build/StudentSurvey';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/team/survey" component={StudentSurvey} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;