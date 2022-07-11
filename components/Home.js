import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Flex w="100%" h="550px" py="15px" pl="150px">
        <Flex w="50%" pr="100px" direction="column" gap="50px">
          <Box pt="100px">
            <Heading as="h1" size="3xl" fontWeight="700">
              Make remote work
            </Heading>
          </Box>
          <Box>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Box>
          <Box>
            <Button color='neutral.almostWhite' bg='neutral.almostBlack' borderRadius='10px'>Learn more</Button>
          </Box>
          <Flex gap='15px' >
            <Image src='client-databiz.svg' alt='client-databiz' objectFit='contain'  />
            <Image src='client-audiophile.svg' alt='client-audiophile' objectFit='contain' />
            <Image src='client-meet.svg' alt='client-meet' objectFit='contain' />
            <Image src='client-maker.svg' alt='client-maker' objectFit='contain' />
          </Flex>
        </Flex>
        <Box w="50%">
          <Image
            src="image-hero-desktop.png"
            alt="image-hero-desktop"
            h="100%"
          />
        </Box>
      </Flex>

      {/* <div class="attribution"> */}
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      {/* </div> */}
    </>
  );
};

export default Home;
