import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import StudentModal from "./StudentModal";
import { removeStudentAsync } from "features";

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditable, setEditable] = useState(false);

  const handleViewDetails = () => {
    setEditable(false);
    setModalOpen(true);
  };

  const handleEditDetails = () => {
    setEditable(true);
    setModalOpen(true);
  };

  const handleRemoveStudent = () => dispatch(removeStudentAsync(student?._id));

  const closeModal = () => setModalOpen(false);

  return (
    <>
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
          <Button
            size="md"
            variant={"solid"}
            leftIcon={<ViewIcon />}
            onClick={handleViewDetails}
          >
            View
          </Button>
          <Button
            size="md"
            variant={"outline"}
            leftIcon={<EditIcon />}
            onClick={handleEditDetails}
          >
            Edit
          </Button>
          <Button
            size="md"
            variant={"ghost"}
            leftIcon={<DeleteIcon />}
            onClick={handleRemoveStudent}
          >
            Remove
          </Button>
        </Stack>
      </Box>
      <StudentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        student={student}
        editable={isEditable}
      />
    </>
  );
};

export default React.memo(StudentCard);
