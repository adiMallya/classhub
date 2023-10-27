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
import { CustomSelect } from "components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeacherAsync, editTeacherAsync } from "features";
import { SUBJECTS } from "src/utils";

const TeacherModal = ({ isOpen, onClose, teacher, mode }) => {
  const dispatch = useDispatch();

  const classes = useSelector((state) => state.class.classes);

  const classOptions = classes.map((cls) => ({
    value: cls?._id,
    label: cls?.name,
  }));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    phoneNumber: "",
    classes: [],
  });

  const editable = mode === "edit" || mode === "add";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phoneNumber" ? Number(value) : value,
    }));
  };

  const handleSelectChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);

    setFormData((prev) => ({
      ...prev,
      classes: selectedValues,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (mode === "edit") {
      dispatch(
        editTeacherAsync({ teacherId: teacher._id, editedFields: formData })
      );
    } else if (mode === "add") {
      dispatch(addTeacherAsync(formData));
    }

    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        subject: "",
        phoneNumber: "",
        classes: [],
      });
    }
  }, [isOpen]);

  useEffect(() => {
    setFormData({
      firstName: (mode !== "add" && teacher?.firstName) || "",
      lastName: (mode !== "add" && teacher?.lastName) || "",
      subject: (mode !== "add" && teacher?.subject) || "",
      phoneNumber: (mode !== "add" && teacher?.phoneNumber) || "",
      classes: (mode !== "add" && teacher?.classes) || [],
    });
  }, [teacher, mode]);

  const selectedClassForTeacher =
    teacher &&
    teacher?.classes.map((cls) => ({
      value: cls?._id,
      label: cls?.name,
    }));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {mode === "edit"
            ? "Edit Teacher"
            : mode === "add"
            ? "Add Teacher"
            : "Teacher Details"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleFormSubmit}>
          <HStack>
            <FormControl isDisabled={!editable} isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                value={formData?.firstName}
                onChange={handleInputChange}
                _focus={editable}
              />
            </FormControl>
            <FormControl isDisabled={!editable} isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                value={formData?.lastName}
                onChange={handleInputChange}
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl isDisabled={!editable} isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                pattern="[0-9]{10}"
                title="10-digit phone number"
                name="phoneNumber"
                value={formData?.phoneNumber}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isDisabled={!editable} isRequired>
              <FormLabel>Subject</FormLabel>
              <Select
                name="subject"
                placeholder="Select a Subject"
                value={formData?.subject || ""}
                onChange={handleInputChange}
              >
                {SUBJECTS.map(({ key, value }) => (
                  <option key={key} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </HStack>
          <FormControl isDisabled={!editable} isRequired>
            <FormLabel>Classes</FormLabel>
            <CustomSelect
              options={classOptions}
              isMulti
              name="classes"
              placeholder="Select Classes"
              value={selectedClassForTeacher || ""}
              onChange={handleSelectChange}
              isDisabled={!editable}
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

export { TeacherModal };
