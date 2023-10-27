import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Navbar } from "components";
import { TeacherList, TeacherModal } from "features";
import { useState } from "react";

export const TeachersView = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  const handleAddDetails = () => setModalOpen(true);

  return (
    <Box>
      <Navbar />

      <Box as="main" p={4} width={"90%"} margin={"auto"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Heading size={"lg"}>Teachers</Heading>
          <Button onClick={handleAddDetails}>Add Teacher</Button>
        </Flex>
        <Box as="section" mt={4}>
          <TeacherList />
        </Box>
      </Box>

      <TeacherModal isOpen={isModalOpen} onClose={closeModal} mode="add" />
    </Box>
  );
};
