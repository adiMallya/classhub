import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { TeacherModal } from "./TeacherModal";
import { removeTeacherAsync } from "features";

const TeacherCard = ({ teacher }) => {
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

  const handleRemoveTeacher = () => dispatch(removeTeacherAsync(teacher?._id));

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
        <Text
          fontSize="lg"
          fontWeight="bold"
        >{`${teacher.firstName} ${teacher.lastName}`}</Text>
        <Text>Subject: {teacher.subject}</Text>
        <Stack
          direction={"row"}
          alignItems={{ base: "flex-start", md: "center" }}
          flexWrap={"wrap"}
          spacing={4}
          mt={4}
        >
          {teacher.classes.map(({ _id, name }) => (
            <Text
              fontSize={"sm"}
              border={"1px solid"}
              borderColor={"gray.300"}
              p={2}
              borderRadius={"md"}
              key={_id}
            >
              {name}
            </Text>
          ))}
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
            onClick={handleRemoveTeacher}
          >
            Remove
          </Button>
        </Stack>
      </Box>
      <TeacherModal
        isOpen={isModalOpen}
        onClose={closeModal}
        teacher={teacher}
        mode={isEditable && "edit"}
      />
    </>
  );
};

export { TeacherCard };
