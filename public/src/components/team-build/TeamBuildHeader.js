import React from 'react';
import { NavLink } from 'react-router-dom';

const TeamBuildHeader = () => (
    <header>
        <h1>Capstone Team Build</h1>
        <NavLink to='/team/dashboard' activeClassName="is-active" exact={true}> Dashboard </NavLink>
        <NavLink to='/team/addStudent' activeClassName="is-active"> Add Student </NavLink>
        <NavLink to='/team/addProjectManager' activeClassName="is-active"> Add Project Manager </NavLink>
    </header>

);

export default TeamBuildHeader;