import {
  Box,
  Flex,
  Link as ChakraLink,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="purple.600" p="4">
      <Flex as={"nav"} w={"full"} justifyContent={"center"}>
        <HStack as={List} spacing={"28"} alignItems={"center"}>
          <ListItem>
            <ChakraLink
              as={Link}
              to={"/classes"}
              color={"whiteAlpha.900"}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              Classes
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={Link}
              to={"/"}
              color={"whiteAlpha.900"}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              School
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={Link}
              to={"/students"}
              color={"whiteAlpha.900"}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              Students
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={Link}
              to={"/teachers"}
              color={"whiteAlpha.900"}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              Teachers
            </ChakraLink>
          </ListItem>
        </HStack>
      </Flex>
    </Box>
  );
};

export { Navbar };
