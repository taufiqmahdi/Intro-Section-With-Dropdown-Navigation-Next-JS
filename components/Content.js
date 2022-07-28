import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <Box
      h={{desktop: "100%"}}
      w={{desktop: "100%", mobile: '375px'}}
      px={{desktop: "25px"}}
      py={{desktop: "15px"}}
      fontSize="18px"
      fontFamily="Epilogue"
    >
      <Navbar />
      <Home />
    </Box>
  );
};

export default Content;
