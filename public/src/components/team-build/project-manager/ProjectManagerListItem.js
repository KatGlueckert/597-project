import React from 'react';
import { Link } from 'react-router-dom';

const ProjectManagerListItem = ({ name, email, id }) => (
    <div>
        <Link to={`/team/editProjectManager/${id}`}>
            <h3>{name}</h3>
        </Link>
        <p> {email} </p>
    </div>
);

export default ProjectManagerListItem;