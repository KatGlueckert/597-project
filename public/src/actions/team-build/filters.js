export const setTextFilter = (text = '') => ({
    type:'SET_TEXT_FILTER',
    text
});

export const sortByRank = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByName = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const setProject = (id) => ({
    type: 'SET_PROJECT',
    id
})