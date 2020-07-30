const filtersReducerDefaultState ={
    project: '',
    sortBy: 'rank',
    text: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            };
        case 'SORT_BY_NAME':
            return{
                ...state,
                sortBy: 'name'
            };
        case 'SORT_BY_RANK':
            return{
                ...state,
                sortBy: 'rank'
            };
        case 'SET_PROJECT':
            return{
                ...state,
                project: action.id
            }
        default:
            return state;
    }
}