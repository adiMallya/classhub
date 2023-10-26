import { useSelector } from "react-redux";
import { filterStudentsByGender, sortStudents } from "src/utils";
import { Box, Table, Tbody, Tr, Td, Skeleton } from "@chakra-ui/react";
import TableHeader from "./TableHeader";

const ClassGrid = () => {
  const status = useSelector((state) => state.class.status);
  const students = useSelector(
    (state) => state.class.studentsOfClass[state.class.selectedClassId] || []
  );
  const genderFilter = useSelector((state) => state.class.genderFilter);
  const sortKey = useSelector((state) => state.class.sortKey);
  // Filter students by gender
  const filteredStudents = filterStudentsByGender(students, genderFilter);
  // Sort students by name, date of birth etc.
  const sortedStudents = sortStudents([...filteredStudents], sortKey);

  return (
    <Box>
      <Table border={"2px"} borderColor={"gray.200"} borderRadius={"md"}>
        <TableHeader />
        <Tbody>
          {status === "loading" ? (
            <Tr>
              <Td colSpan={6}>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Td>
            </Tr>
          ) : (
            sortedStudents.map((student) => (
              <Tr key={student?._id}>
                <Td border="2px solid" borderColor="gray.200">
                  {student?.firstName}
                </Td>
                <Td border="2px solid" borderColor="gray.200">
                  {student?.lastName}
                </Td>
                <Td border="2px solid" borderColor="gray.200">
                  {student?.gender}
                </Td>
                <Td border="2px solid" borderColor="gray.200">
                  {new Date().getFullYear() -
                    new Date(student?.dateOfBirth).getFullYear()}
                </Td>
                <Td border="2px solid" borderColor="gray.200">
                  {student?.attendance}
                </Td>
                <Td border="2px solid" borderColor="gray.200">
                  {student?.marks}
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export { ClassGrid };
