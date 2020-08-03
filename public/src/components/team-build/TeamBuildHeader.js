import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TeamBuildHeader = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/team/dashboard"><h1>Capstone Team Build</h1></Link>
            </div>
            <NavLink className="button button--link" to='/team/addStudent' activeClassName="is-active"> Add Student </NavLink>
            <NavLink className="button button--link" to='/team/addProjectManager' activeClassName="is-active"> Add Project Manager </NavLink>
            <NavLink className="button button--link" to='/team/addProject' activeClassName="is-active">Add Project</NavLink>    
        </div>
    </header>

);

export default TeamBuildHeader;