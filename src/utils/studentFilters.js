export const filterStudentsByGender = (students, genderFilter) => students.filter((student) => {
    if (genderFilter === "all") return true;
    return student.gender === genderFilter;
});

export const sortStudents = (students, sortKey, sortDirection) => students.sort((a, b) => {
    let result;
    if (typeof a[sortKey] === 'string') {
        result = a[sortKey].localeCompare(b[sortKey]);
    }
    else if (typeof a[sortKey] === 'number') {
        result = a[sortKey] - b[sortKey];
    }
    else if (sortKey === 'dateOfBirth') {
        result = new Date(a.dateOfBirth) - new Date(b.dateOfBirth);
    } else {
        result = 0;
    }

    return sortDirection === 'asc' ? result : -result;
});