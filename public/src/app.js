import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addStudent } from './actions/team-build/capstoneStudents';


const store = configureStore();

const state = store.getState();
console.log(state);

store.dispatch(addStudent({name: 'Riley', email: 'riley@email.com', rank: 1}));
store.dispatch(addStudent({name: 'Emma', email: 'emma@email.com', rank: 2}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));

