import database from '../../firebase/firebase';
import { setProjectManagers } from './capstoneProjectManagers';

export const addProject = (project) => ({
    type: 'ADD_PROJECT',
    project
});

export const startAddProject = (projectData = {}) => {
    return (dispatch) => {
        const {
            company = '',
            title = '',
            description= '',
            tags = []
        } =  projectData;
        const project = {company, title, description, tags};
        return database.ref('projects').push(project).then((ref) => {
            dispatch(addProject({
                id: ref.key,
                ...project
            }));
        });
    };
};

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

export const removeProject = ({ id }) => ({
    type: 'REMOVE_PROJECT',
    id
});

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

export const startSetProjects = () => {
    return (dispatch) => {
        return database.ref('projects').once('value').then((snapshot) => {
            const projects = [];
            snapshot.forEach((child) => {
                projects.push({
                    id: child.key,
                    ...child.val()
                });
            });
            dispatch(setProjects(projects));
        });
    };
};