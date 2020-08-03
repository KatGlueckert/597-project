import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = ({id, title, company, tags }) => (
        <Link className="list-item" to={`/team/editProject/${id}`}>
            <div >
                <h3 className="list-item__title">{title}</h3>
                <p className="list-item__subtitle">Tags: {tags.map((tag) => (`| ${tag} | `))}</p>
            </div>    
            <div>
            <h3 className="list-item_data"> {company} </h3>
            </div>
        </Link>
);

export default ProjectListItem;