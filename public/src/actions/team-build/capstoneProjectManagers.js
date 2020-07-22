import uuid from 'uuid';

export const addProjectManager = (
    {
        id = '',
        email = '',
        name = '', 
        draftGroup = undefined
    }
) => ({
    type: 'ADD_PROJECT_MANAGER',
    projectManager: {
        id: id ? id : uuid(),
        email,
        name,
        draftGroup
    }
});

export const removeProjectManager = ({id}) => ({
    type: 'REMOVE_PROJECT_MANAGER',
    id
});

export const editProjectManager = (id, updates) => ({
    type: 'EDIT_PROJECT_MANAGER',
    id,
    updates
});

