import { createStore, combineReducers } from 'redux';
import capstoneStudentsReducer from '../reducers/team-build/capstoneStudents';
import capstoneProjectManagersReducer from '../reducers/team-build/capstoneProjectManagers';

export default () => {
    const store = createStore(
        combineReducers({
            students: capstoneStudentsReducer,
            projectManagers: capstoneProjectManagersReducer
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}