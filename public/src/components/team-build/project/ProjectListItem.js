import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = ({id, title, company, tags }) => (
    <div>
        <Link to={`/team/editProject/${id}`}>
            <h3>{title}</h3>
        </Link>
        <p> {company} </p>
        <p>Tags: {tags.map((tag) => (`| ${tag} | `))}</p>
    </div>
);

export default ProjectListItem;