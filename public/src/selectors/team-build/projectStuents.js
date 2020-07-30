//Get all students on project
export default (students, {project}) => {
    return students.filter((student) => student.projectId === project);
};