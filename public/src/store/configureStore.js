import { createStore, combineReducers } from 'redux';
import capstoneStudentSurveysReducer from '../reducers/team-build/capstoneStudentSurveys';
import capstoneStudentsReducer from '../reducers/team-build/capstoneStudents';

export default () => {
    const store = createStore(
        combineReducers({
            students: capstoneStudentsReducer,
            surveys: capstoneStudentSurveysReducer
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}