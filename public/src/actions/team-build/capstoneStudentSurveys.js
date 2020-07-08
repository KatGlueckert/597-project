export const addStudentSurvey = (
    {
        internships = '',
        experienceAtInternships = '',
        subjectsInterestedIn = [],
        strongestCatagories = [],
        weakestCategories= [],
        mastersProgramInterest = false
    } = {}
) => ({
    type: 'ADD_STUDENT_SURVEY',
    survey: {
        internships,
        experienceAtInternships,
        subjectsInterestedIn,
        strongestCatagories,
        weakestCategories,
        mastersProgramInterest
    }
});