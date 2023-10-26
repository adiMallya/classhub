import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchClassesAsync,
  fetchClassStudentsAsync,
  setSelectedClassId,
} from "features";
import { Button, HStack, Select } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const ClassSelector = () => {
  const dispatch = useDispatch();

  const classes = useSelector((state) => state.class.classes);
  const status = useSelector((state) => state.class.status);
  const studentsOfClass = useSelector((state) => state.class.studentsOfClass);
  const selectedClassId = useSelector((state) => state.class.selectedClassId);

  const handleSelectChange = (event) => {
    const classId = event.target.value;
    dispatch(setSelectedClassId(classId));

    if (!studentsOfClass[classId]) {
      dispatch(fetchClassStudentsAsync(classId));
    }
  };

  const handleClassRefresh = () => {
    if (selectedClassId) {
      dispatch(fetchClassStudentsAsync(selectedClassId));
    }
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchClassesAsync());
    }
  }, [status, dispatch]);

  return (
    <HStack spacing={4}>
      <Select
        placeholder="Select a Class"
        width={"200px"}
        onChange={handleSelectChange}
      >
        {classes.map((cls) => (
          <option key={cls._id} value={cls?._id}>
            {cls?.name}
          </option>
        ))}
      </Select>
      <Button
        onClick={handleClassRefresh}
        variant={"outline"}
        leftIcon={<RepeatIcon />}
      ></Button>
    </HStack>
  );
};

export { ClassSelector };
