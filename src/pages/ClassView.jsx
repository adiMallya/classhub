import { Box, Stack, Heading } from "@chakra-ui/react";
import { Navbar } from "components";
import { ClassSelector, ClassGrid } from "features";

export const ClassView = () => {
  return (
    <Box>
      <Navbar />

      <Box as="main" p={4} width={"90%"} margin={"auto"}>
        <Heading size={"lg"}>Classes</Heading>

        <Stack as="section" mt={4} spacing={4}>
          <ClassSelector />
          <ClassGrid />
        </Stack>
      </Box>
    </Box>
  );
};
