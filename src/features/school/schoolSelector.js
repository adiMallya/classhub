import { createSelector } from "reselect";

const selectAllStudents = state => state.students.students;

const selectTotalStudents = createSelector(selectAllStudents, (students) => students?.length);

const selectAverageAttendance = createSelector(selectAllStudents, (students) => {
    const totalAttendance = students?.reduce((sum, student) => sum + student?.attendance, 0);
    return Math.round(totalAttendance / students?.length);
});

const selectAverageMarks = createSelector(selectAllStudents, (students) => {
    const totalMarks = students?.reduce((sum, student) => sum + student?.marks, 0);
    return Math.round(totalMarks / students?.length);
});

const selectTopStudent = createSelector(selectAllStudents, (students) => students?.reduce((top, curr) => (curr?.marks > top?.marks ? curr : top), students[0] || {}));

export { selectTotalStudents, selectAverageAttendance, selectAverageMarks, selectTopStudent };