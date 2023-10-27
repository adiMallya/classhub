import { Box, Stack } from "@chakra-ui/react";
import { Navbar } from "components";
import { SchoolDashboard } from "features";

export const SchoolView = () => {
  return (
    <Stack spacing={16}>
      <Navbar />

      <Box as="main" m={6} width={"80%"} margin={"auto"}>
        <SchoolDashboard />
      </Box>
    </Stack>
  );
};
