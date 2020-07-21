import uuid from 'uuid';

export const addStudent = (
    {
        email = '',
        name = '',
        rank = 0,
        surveyStatus = false,
        draftGroup = undefined
    } = {}
) => ({
    type:'ADD_CAPSTONE_STUDENT',
    student: {
        id: uuid(),
        email,
        name,
        rank,
        surveyStatus,
        draftGroup
    }
});

export const removeStudent = ({ id }) => ({
    type: 'REMOVE_CAPSTONE_STUDENT',
    id
});

export const editStudent = (id, updates) => ({
    type: 'EDIT_CAPSTONE_STUDENT',
    id,
    updates
});

export const selectDraftGroups = () => ({
    type: 'SELECT_DRAFT_GROUPS'
});

