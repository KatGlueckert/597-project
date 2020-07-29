import uuid from 'uuid';

export const addProject = ({
    id = '',
    company = '',
    title = '',
    tags = []
}) => ({
    type: 'ADD_PROJECT',
    project: {
        id: id ? id : uuid(),
        company,
        title,
        tags
    }
});

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

export const removeProject = ({ id }) => ({
    type: 'REMOVE_PROJECT',
    id
});