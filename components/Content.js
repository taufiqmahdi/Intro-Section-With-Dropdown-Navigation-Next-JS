import { Box } from "@chakra-ui/react";
import Home from "./Home";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <Box
      h={{desktop: "100%"}}
      w={{desktop: "100%", mobile: '100vw'}}
      px={{desktop: "25px", mobile: '10px'}}
      py={{desktop: "15px", mobile: '10px'}}
      fontSize="18px"
      fontFamily="Epilogue"
    >
      <Navbar />
      <Home />
    </Box>
  );
};

export default Content;
