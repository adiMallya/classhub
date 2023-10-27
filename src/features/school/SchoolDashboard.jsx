import { useSelector } from "react-redux";
import {
  selectTotalStudents,
  selectAverageAttendance,
  selectAverageMarks,
  selectTopStudent,
} from "./schoolSelector";
import {
  Box,
  Flex,
  Grid,
  Skeleton,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

const SchoolDashboard = () => {
  const status = useSelector((state) => state.students.status);
  const totalStudents = useSelector(selectTotalStudents);
  const averageAttendance = useSelector(selectAverageAttendance);
  const averageMarks = useSelector(selectAverageMarks);
  const topStudent = useSelector(selectTopStudent);

  if (status === "loading") {
    return (
      <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
        <Skeleton
          height="150px"
          width="150px"
          borderRadius="md"
          padding="4"
        ></Skeleton>
        <Skeleton
          height="150px"
          width="150px"
          borderRadius="md"
          padding="4"
        ></Skeleton>
        <Skeleton
          height="150px"
          width="150px"
          borderRadius="md"
          padding="4"
        ></Skeleton>
        <Skeleton
          height="150px"
          width="150px"
          borderRadius="md"
          padding="4"
        ></Skeleton>
      </Grid>
    );
  }

  return (
    <Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
      <Flex
        direction="column"
        border="1px"
        borderRadius="md"
        padding="4"
        boxShadow="md"
      >
        <Stat>
          <StatLabel>Students</StatLabel>
          <StatNumber>{totalStudents || 0}</StatNumber>
        </Stat>
      </Flex>

      <Flex
        direction="column"
        border="1px"
        borderRadius="md"
        padding="4"
        boxShadow="md"
      >
        <Stat>
          <StatLabel>Average Attendance</StatLabel>
          <StatNumber>{averageAttendance || 0}%</StatNumber>
        </Stat>
      </Flex>

      <Flex
        direction="column"
        border="1px"
        borderRadius="md"
        padding="4"
        boxShadow="md"
      >
        <Stat>
          <StatLabel>Average Marks</StatLabel>
          <StatNumber>{averageMarks || 0}</StatNumber>
        </Stat>
      </Flex>

      <Box border="1px" borderRadius="md" padding="4" boxShadow="md">
        <Text fontWeight="bold" marginBottom="2">
          Top Student
        </Text>
        <Text marginBottom="1">
          {topStudent?.firstName} {topStudent?.lastName}
        </Text>
        <Text>Marks: {topStudent?.marks}</Text>
      </Box>
    </Grid>
  );
};

export { SchoolDashboard };
