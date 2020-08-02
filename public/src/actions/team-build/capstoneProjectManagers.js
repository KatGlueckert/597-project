import database from '../../firebase/firebase';

export const addProjectManager = (projectManager) => ({
    type: 'ADD_PROJECT_MANAGER',
    projectManager
});

export const startAddProjectManager = (projectManagerData = {}) => {
    return (dispatch) => {
        const {
            email= '',
            name = '',
        } = projectManagerData;
        const projectManager = { email, name };
        database.ref('projectManagers').push(projectManager).then((ref) => {
            dispatch(addProjectManager({
                id: ref.key,
                ...projectManager
            }));
        });
    };
};

export const removeProjectManager = ({id}) => ({
    type: 'REMOVE_PROJECT_MANAGER',
    id
});

export const startRemoveProjectManager = ({id}) => {
    return (dispatch) => {
        return database.ref(`projectManagers/${id}`).remove().then(() => {
            dispatch(removeProjectManager({id}));
        });
    };
};

export const editProjectManager = (id, updates) => ({
    type: 'EDIT_PROJECT_MANAGER',
    id,
    updates
});

export const startEditProjectManager = (id, updates) => {
    return (dispatch) => {
        return database.ref(`projectManagers/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editProjectManager(id, updates));
        });
    };
};

export const setProjectManagers = (projectManagers) => ({
    type: "SET_PROJECT_MANAGERS",
    projectManagers
});

export const startSetProjectManagers = () => {
    return (dispatch, getState) => {
        return database.ref('projectManagers').once('value').then((snapshot) => {
            const projectManagers = [];
            snapshot.forEach((child) => {
                projectManagers.push({
                    id: child.key,
                    ...child.val()
                });
            });
            dispatch(setProjectManagers(projectManagers));
        });
    };
}

export const addProjectManagerToProject = (id, projectId) => ({
    type: 'ADD_PROJECT_MANAGER_TO_PROJECT',
    id,
    projectId
});

export const startAddProjectManagerToProject = (id, projectId) => {
    return (dispatch) => {
        return database.ref(`projectManagers/${id}/projectId`).set(`${projectId}`).then(() => {
            dispatch(addProjectManagerToProject(id, projectId));
        });
    };
};

