export const filterStudentsByGender = (students, genderFilter) => students.filter((student) => {
    if (genderFilter === "all") return true;
    return student.gender === genderFilter;
});

export const sortStudents = (students, sortKey) => students.sort((a, b) => {
    if (sortKey === 'dateOfBirth') {
        return new Date(a.dateOfBirth) - new Date(b.dateOfBirth);
    }

    if (sortKey === ('attendance' || 'marks')) {
        return Number(a[sortKey]) - Number(b[sortKey]);
    }

    return a[sortKey].localeCompare(b[sortKey]);
});