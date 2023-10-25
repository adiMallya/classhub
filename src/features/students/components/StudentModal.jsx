import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editStudentAsync } from "features";
import { formatDateToStandard } from "src/utils";

const StudentModal = ({ isOpen, onClose, student, editable }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: student?.firstName || "",
    lastName: student?.lastName || "",
    dateOfBirth: student?.dateOfBirth || "",
    gender: student?.gender || "",
    class: student?.class._id || "",
    attendance: student?.attendance || 0,
    marks: student?.marks || 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(typeof student._id);
    dispatch(
      editStudentAsync({ studentId: student._id, editedFields: formData })
    );

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {editable ? "Edit Student" : "Student Details"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleFormSubmit}>
          <HStack>
            <FormControl isDisabled={!editable}>
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                value={formData?.firstName}
                onChange={handleInputChange}
                _focus={editable}
              />
            </FormControl>
            <FormControl isDisabled={!editable}>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                value={formData?.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl isDisabled={true}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                name="dateOfBirth"
                value={formatDateToStandard(formData?.dateOfBirth)}
              />
            </FormControl>
            <FormControl isDisabled={true}>
              <FormLabel>Gender</FormLabel>
              <Input name="gender" value={formData?.gender} />
            </FormControl>
          </HStack>
          <FormControl isDisabled={!editable}>
            <FormLabel>Class</FormLabel>
            <Select
              name="class"
              value={formData?.class}
              onChange={handleInputChange}
            ></Select>
          </FormControl>
          <FormControl isDisabled={!editable}>
            <FormLabel>Attendance</FormLabel>
            <Input
              name="attendance"
              type="number"
              value={formData?.attendance}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl isDisabled={!editable}>
            <FormLabel>Marks</FormLabel>
            <Input
              name="marks"
              type="number"
              value={formData?.marks}
              onChange={handleInputChange}
            />
          </FormControl>
          <ModalFooter>
            {editable ? (
              <Stack direction={"row"} spacing={3}>
                <Button type="submit">Update</Button>
                <Button type="button" variant={"ghost"} onClick={onClose}>
                  Cancel
                </Button>
              </Stack>
            ) : (
              <Button type="button" onClick={onClose}>
                Close
              </Button>
            )}
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StudentModal;
