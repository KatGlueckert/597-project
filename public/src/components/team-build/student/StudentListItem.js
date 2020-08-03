import React from 'react';
import { Link } from 'react-router-dom';

const StudentListItem = ({ name, email, rank, id }) => (
        <Link className="list-item" to={`/team/editStudent/${id}`}>
            <div>
                <h3 className="list-item__title">{name}</h3>
                <span className="list-item__subtitle">{email}</span>
            </div>    
            <div>
                <h3 className="list-item__data">{rank}</h3>
            </div>  
        </Link>
);

export default StudentListItem;