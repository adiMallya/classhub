import { useDispatch, useSelector } from "react-redux";
import { setGenderFilter, setSortKey } from "features";
import { Select, Th, Thead, Tr } from "@chakra-ui/react";

const TableHeader = () => {
  const dispatch = useDispatch();

  const genderFilter = useSelector((state) => state.class.genderFilter);

  const handleFilter = (event) => dispatch(setGenderFilter(event.target.value));

  const handleSort = (event) => dispatch(setSortKey(event.target.dataset.name));

  return (
    <Thead>
      <Tr>
        <Th
          border="2px solid"
          borderColor="gray.200"
          data-name="firstName"
          onClick={handleSort}
        >
          First Name
        </Th>
        <Th
          border="2px solid"
          borderColor="gray.200"
          data-name="lastName"
          onClick={handleSort}
        >
          Last Name
        </Th>
        <Th border="1px solid" borderColor="gray.200" display={"flex"} gap={2}>
          Gender
          <Select size={"xs"} value={genderFilter} onChange={handleFilter}>
            <option value={"all"}>All</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </Select>
        </Th>
        <Th
          border="2px solid"
          borderColor="gray.200"
          data-name="dateOfBirth"
          onClick={handleSort}
        >
          Age
        </Th>
        <Th
          border="2px solid"
          borderColor="gray.200"
          data-name="attendance"
          onClick={handleSort}
        >
          Attendance (/100)
        </Th>
        <Th
          border="2px solid"
          borderColor="gray.200"
          data-name="marks"
          onClick={handleSort}
        >
          Marks (/100)
        </Th>
      </Tr>
    </Thead>
  );
};

export default TableHeader;
