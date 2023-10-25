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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStudentAsync, editStudentAsync } from "features";
import { formatDateToStandard } from "src/utils";

const StudentModal = ({ isOpen, onClose, student, mode }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    class: "",
    attendance: 0,
    marks: 0,
  });

  const editable = mode === "edit" || mode === "add";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (mode === "edit") {
      dispatch(
        editStudentAsync({ studentId: student._id, editedFields: formData })
      );
    } else if (mode === "add") {
      dispatch(addStudentAsync(formData));
    }

    onClose();
  };

  useEffect(() => {
    setFormData({
      firstName: (mode !== "add" && student?.firstName) || "",
      lastName: (mode !== "add" && student?.lastName) || "",
      dateOfBirth: (mode !== "add" && student?.dateOfBirth) || "",
      gender: (mode !== "add" && student?.gender) || "",
      class: (mode !== "add" && student?.class._id) || "",
      attendance: (mode !== "add" && student?.attendance) || 0,
      marks: (mode !== "add" && student?.marks) || 0,
    });
  }, [student, mode]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        class: "",
        attendance: 0,
        marks: 0,
      });
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "edit"
            ? "Edit Student"
            : mode === "add"
            ? "Add Student"
            : "Student Details"}
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
            <FormControl isDisabled={!editable}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                name="dateOfBirth"
                value={
                  formData?.dateOfBirth &&
                  formatDateToStandard(formData.dateOfBirth)
                }
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isDisabled={!editable}>
              <FormLabel>Gender</FormLabel>
              <Select
                name="gender"
                value={formData?.gender}
                onChange={handleInputChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
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
                <Button type="submit">
                  {mode === "edit" ? "Update" : "Add"}
                </Button>
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

export { StudentModal };
