//Get all Unselected Students
export default (students, {sortBy, textFilter}) => {
    return students.filter((student) => {
        const unselected = !student.projectId;
        return unselected;
    }).sort((a, b) => {
        if (sortBy === 'rank'){
            return a.rank > b.rank ? 1 : -1;
        }else if (sortBy === 'name'){
            return a.name > b.name ? 1 : -1;
        }
    });
};