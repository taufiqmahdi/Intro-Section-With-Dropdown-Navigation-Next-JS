import { Box } from "@chakra-ui/react";
import Home from "./Home";

const Content = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      px="25px"
      py="15px"
      fontSize="18px"
      fontFamily="Epilogue"
    >
      <Home />
    </Box>
  );
};

export default Content;
