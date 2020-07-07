import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const jsx = (
    <div>
        <AppRouter />
    </div>
);

ReactDOM.render(jsx , document.getElementById('app'));

