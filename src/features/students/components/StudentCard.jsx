import React from "react";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";

const StudentCard = ({ student }) => (
  <Box
    border="1px solid"
    borderColor="gray.300"
    p={4}
    borderRadius="md"
    mb={4}
    boxShadow={"base"}
  >
    <Stack
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      spacing={4}
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
      >{`${student.firstName} ${student.lastName}`}</Text>
      <Text>{student.class.name}</Text>
      <Text>
        Gender: {student.gender.toLowerCase() === "male" ? "Boy" : "Girl"}
      </Text>
      <Text>Attendance: {student.attendance}%</Text>
      <Text>Marks: {student.marks}</Text>
    </Stack>

    <Stack direction={"row"} spacing={4} mt={4}>
      <Button size="md" variant={"solid"} leftIcon={<ViewIcon />}>
        View
      </Button>
      <Button size="md" variant={"outline"} leftIcon={<EditIcon />}>
        Edit
      </Button>
      <Button size="md" variant={"ghost"} leftIcon={<DeleteIcon />}>
        Remove
      </Button>
    </Stack>
  </Box>
);

export default React.memo(StudentCard);
