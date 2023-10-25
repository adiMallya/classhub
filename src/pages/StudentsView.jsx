import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Navbar } from "components";
import { StudentList } from "features";

export const StudentsView = () => {
  return (
    <Box>
      <Navbar />

      <Box as="main" p={4} width={"90%"} margin={"auto"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading size={"lg"}>Students</Heading>
          <Button>Add Student</Button>
        </Flex>
        <Box as="section" mt={4}>
          <StudentList />
        </Box>
      </Box>
    </Box>
  );
};
