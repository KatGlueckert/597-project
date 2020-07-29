import database from '../../firebase/firebase';

export const addStudent = (student) => ({
    type:'ADD_CAPSTONE_STUDENT',
    student
});

export const startAddStudent = (studentData = {}) => {
    return (dispatch) => {
        const {
            email = '',
            name = '',
            rank = 0,
            surveyStatus = false
        } = studentData;
        const student = { email, name, rank, surveyStatus }
        database.ref('students').push(student).then((ref) => {
            dispatch(addStudent({
                id: ref.key,
                ...student
            }));
        });
    };
};

//REMOVE_CAPSTONE_STUDENT
export const removeStudent = ({ id }) => ({
    type: 'REMOVE_CAPSTONE_STUDENT',
    id
});

export const startRemoveStudent = ({ id }) => {
    return (dispatch, getState) => {
        return database.ref(`students/${id}`).remove().then(() => {
            dispatch(removeStudent({ id }));
        });
    };
};

//EDIT_CAPSTONE_STUDENT
export const editStudent = (id, updates) => ({
    type: 'EDIT_CAPSTONE_STUDENT',
    id,
    updates
});

export const startEditStudent = (id, updates) => {
    return (dispatch, getState) => {
        return database.ref(`students/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editStudent(id, updates));
        });
    };
};

//SET_STUDENTS
export const setStudents = (students) => ({
    type: 'SET_STUDENTS',
    students
})

export const startSetStudents = () => {
    return (dispatch, getState) => {
        return database.ref('students').once('value').then((snapshot) => {
            const students = [];
            snapshot.forEach((child) => {
                students.push({
                    id: child.key,
                    ...child.val()
                });
            });
            dispatch(setStudents(students));
        })
    }
}

export const selectDraftGroups = () => ({
    type: 'SELECT_DRAFT_GROUPS'
});

//ADD_STUDENT_SURVEY
export const addStudentSurvey = ( id, survey ) => ({
    type: 'ADD_STUDENT_SURVEY',
    id,
    survey
});

export const startAddStudentSurvey = (id, surveyData = {}) => {
    return (dispatch) => {
        const {
            internships = '',
            experienceAtInternships = '',
            subjectsInterestedIn = [],
            strongestCatagories = [],
            weakestCategories= [],
            mastersProgramInterest = false
        } = surveyData;
        const survey = { internships, experienceAtInternships, subjectsInterestedIn, strongestCatagories, weakestCategories, mastersProgramInterest};
        database.ref(`students/${id}/survey`).push(survey).then(() => {
            database.ref(`students/${id}/surveyStatus`).set(true).then(() => {
                dispatch(addStudentSurvey(id, survey));
            });
        });
    };
};
