import { chakra } from "@chakra-ui/react";
import Select from "react-select";

const CustomSelect = chakra(Select, {
  shouldForwardProp: (prop) => true,
});

export { CustomSelect };
