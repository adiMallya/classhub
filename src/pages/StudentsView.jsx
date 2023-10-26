import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Navbar } from "components";
import { StudentList, StudentModal } from "features";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const StudentsView = () => {
  const status = useSelector((state) => state.students.status);

  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  const handleAddDetails = () => setModalOpen(true);

  useEffect(() => {
    if (status === "error") {
      toast.error(error);
    }
  }, [status]);

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
