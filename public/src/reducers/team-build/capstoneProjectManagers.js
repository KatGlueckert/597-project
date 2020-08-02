//Capstone Project Managers Reducer

const capstoneProjectManagerReducerDefaultState = [];

export default (state = capstoneProjectManagerReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_PROJECT_MANAGER':
            return[
                ...state,
                action.projectManager
            ];
        case 'EDIT_PROJECT_MANAGER':
            return state.map((projectManager) => {
                if(projectManager.id === action.id){
                    return{
                        ...projectManager,
                        ...action.updates
                    }
                }else{
                    return {
                        ...projectManager
                    }
                }
            });
        case 'REMOVE_PROJECT_MANAGER':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_PROJECT_MANAGERS':
            return action.projectManagers;
        case 'ADD_PROJECT_MANAGER_TO_PROJECT':
            return state.map((projectManager) => {
                if(projectManager.id === action.id){
                    return {
                        ...projectManager,
                        projecetId: action.projectId
                    };
                }else{
                    return{
                        ...projectManager
                    };
                }
            });
        default:
            return state;
    }
}