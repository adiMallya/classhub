import { Box, Stack, Heading } from "@chakra-ui/react";
import { Navbar } from "components";
import { ClassSelector, ClassGrid } from "features";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const ClassView = () => {
  const status = useSelector((state) => state.students.status);

  useEffect(() => {
    if (status === "error") {
      toast.error(error);
    }
  }, [status]);

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
