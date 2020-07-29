import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import capstoneStudentsReducer from '../reducers/team-build/capstoneStudents';
import capstoneProjectManagersReducer from '../reducers/team-build/capstoneProjectManagers';
import capstoneProjectsReducer from '../reducers/team-build/capstoneProjects';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            students: capstoneStudentsReducer,
            projectManagers: capstoneProjectManagersReducer,
            projects: capstoneProjectsReducer
        }), composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}