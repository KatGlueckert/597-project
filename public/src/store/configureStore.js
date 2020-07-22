import { createStore, combineReducers } from 'redux';
import capstoneStudentsReducer from '../reducers/team-build/capstoneStudents';

export default () => {
    const store = createStore(
        combineReducers({
            students: capstoneStudentsReducer
        }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}