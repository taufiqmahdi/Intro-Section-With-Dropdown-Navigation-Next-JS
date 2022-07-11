import { Box, Flex } from "@chakra-ui/react";
import Home from "./Home";

const Layout = ({ children }) => {
  return (
    <Box h="100vh" w="100vw" px="25px" py="15px" fontSize='18px' fontFamily='Epilogue'>
      <head>
        <title>Intro Section with Dropdown Navigation Using Next JS</title>
      </head>
      <section>
        <Home />
      </section>
    </Box>
  );
};

export default Layout;
