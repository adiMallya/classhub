import { useSelector } from "react-redux";
import { Box, Skeleton } from "@chakra-ui/react";
import { StudentCard } from "./StudentCard";

const StudentList = () => {
  const students = useSelector((state) => state.students.students);
  const status = useSelector((state) => state.students.status);

  if (status === "loading") {
    return (
      <Box>
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            height={"100px"}
            my={"10px"}
            startColor="gray.100"
            endColor="gray.300"
          />
        ))}
      </Box>
    );
  }

  return (
    <Box>
      {students.map((student) => (
        <StudentCard key={student._id} student={student} />
      ))}
    </Box>
  );
};

export { StudentList };
