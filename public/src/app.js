import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addStudentSurvey } from './actions/team-build/capstoneStudentSurveys';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addStudentSurvey({internships: 'International Paper and Pariveda'}));
store.dispatch(addStudentSurvey({internships: 'The Audience'}));

const state = store.getState();
console.log(state);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));

