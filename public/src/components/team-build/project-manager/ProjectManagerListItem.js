import React from 'react';
import { Link } from 'react-router-dom';

const ProjectManagerListItem = ({ name, email, id }) => (
        <Link className="list-item" to={`/team/editProjectManager/${id}`}>
            <h3 className="list-item__title">{name}</h3>
            <p className="list-item__subtitle"> {email} </p>
        </Link>
        
);

export default ProjectManagerListItem;