import React from 'react';
import { Link } from 'react-router-dom';

const StudentListItem = ({ name, email, rank, id }) => (
    <div>
        <Link to={`/team/editStudent/${id}`}>
            <h3>{name}</h3>
        </Link>
        <p>{email} - Rank: {rank}</p>
    </div>
);

export default StudentListItem;