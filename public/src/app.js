import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addStudent } from './actions/team-build/capstoneStudents';
import { addProjectManager } from './actions/team-build/capstoneProjectManagers';

const store = configureStore();

store.dispatch(addStudent({id:'1fc8a5e6-1a59-4351-ad53-dc07305beb55', name: 'Riley', email: 'rebyars@crimson.ua.edu', rank: 1}));
store.dispatch(addStudent({name: 'Willa', email: 'riley.byars81@gmail.com', rank: 2}));

store.dispatch(addProjectManager({name: 'Kanye West', email: 'ye@west.come'}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));

