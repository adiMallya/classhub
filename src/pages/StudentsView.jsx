import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Navbar } from "components";
import { StudentList, StudentModal } from "features";
import { useState } from "react";

export const StudentsView = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  const handleAddDetails = () => setModalOpen(true);
  return (
    <Box>
      <Navbar />

      <Box as="main" p={4} width={"90%"} margin={"auto"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading size={"lg"}>Students</Heading>
          <Button onClick={handleAddDetails}>Add Student</Button>
        </Flex>
        <Box as="section" mt={4}>
          <StudentList />
        </Box>
      </Box>

      <StudentModal isOpen={isModalOpen} onClose={closeModal} mode="add" />
    </Box>
  );
};
