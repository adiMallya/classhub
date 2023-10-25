import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsAsync } from "features";
import { Box, Skeleton } from "@chakra-ui/react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const status = useSelector((state) => state.students.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudentsAsync());
    }
  }, [status, dispatch]);

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
