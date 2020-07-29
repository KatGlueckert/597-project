//Capstone Projects Reducer

const defaultCapstoneProjectReducerDefaultState = [];

export default (state = defaultCapstoneProjectReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_PROJECT':
            return[
                ...state,
                action.project
            ];
        case 'EDIT_PROJECT':
            return state.map((project) => {
                if(project.id === action.id){
                    return{
                        ...project,
                        ...action.updates
                    };
                }else{
                    return{
                        ...project
                    };
                };
            });
        case 'REMOVE_PROJECT':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_PROJECTS':
            return action.projects;
        default: 
            return state;
    }
}