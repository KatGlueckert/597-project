//Capstone Student Survey Reducer
const surveyReducerDefaultState = [];


export default (state = surveyReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_STUDENT_SURVEY':
            return [
                ...state,
                action.survey
            ];
        default:
            return state;
    }
};