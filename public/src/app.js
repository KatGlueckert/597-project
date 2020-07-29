import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { startSetStudents } from './actions/team-build/capstoneStudents';
import { startSetProjectManagers } from './actions/team-build/capstoneProjectManagers';
import { addProject } from './actions/team-build/capstoneProjects';
import { firebase } from './firebase/firebase';

const store = configureStore();

store.dispatch(addProject({title: 'Project One', company: 'Pariveda Solutions', tags: ['Web Development', 'Analytical Skills']}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(startSetStudents()).then(store.dispatch(startSetProjectManagers())).then(() => {
    ReactDOM.render(jsx , document.getElementById('app'));
});

