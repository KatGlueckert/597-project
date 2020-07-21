//Capstone Students Reducer

const capstoneStudentReducerDefaultState = []

export default (state = capstoneStudentReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_CAPSTONE_STUDENT':
            return [
                ...state,
                action.student
            ]
        case 'EDIT_CAPSTONE_STUDENT':
            return state.map((student) => {
                if(student.id === action.id){
                    return{
                        ...student,
                        ...action.updates
                    }
                }else{
                    return{
                        ...student
                    }
                }
            });
        case 'REMOVE_CAPSTONE_STUDENT':
            return state.filter(({ id }) => id !== action.id);
        //case 'SELECT_DRAFT_GROUPS'
        default: 
            return state; 
    }
}