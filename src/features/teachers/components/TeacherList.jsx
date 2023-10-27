import { useSelector } from "react-redux";
import { Box, Skeleton } from "@chakra-ui/react";
import { TeacherCard } from "./TeacherCard";

const TeacherList = () => {
  const teachers = useSelector((state) => state.teachers.teachers);
  const status = useSelector((state) => state.teachers.status);

  if (status === "loading") {
    return (
      <Box>
        {[...Array(2)].map((_, index) => (
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
      {teachers.map((teacher) => (
        <TeacherCard key={teacher._id} teacher={teacher} />
      ))}
    </Box>
  );
};

export { TeacherList };
