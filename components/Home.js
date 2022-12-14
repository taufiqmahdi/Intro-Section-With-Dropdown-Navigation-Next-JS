import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Flex 
      // w="100%" h="550px"
      py={{desktop: "15px"}} pl={{desktop: "150px"}} 
      w={{desktop: "100%", mobile: '375px'}}
      h={{desktop: "550px", mobile: '100vh'}}
      direction={{desktop: "row", mobile:'column-reverse'}}
      >
        <Flex  align={{desktop: 'left', mobile: 'center'}} justify={{desktop: 'left', mobile: 'center'}} w={{desktop: "50%", mobile: '100%'}} pr={{desktop: "100px"}}  direction="column" gap="50px">
          <Box w='100%' pt={{desktop: "100px"}} >
            <Heading display={{desktop: 'block', mobile: 'none'}} as="h1" size={{desktop: "3xl", mobile: '2xl'}} fontWeight="700" textAlign={{desktop: 'left', mobile: 'center'}}>
              <Flex >
              Make 
              </Flex>
              <Flex>
              remote work
              </Flex>
            </Heading>
            <Heading display={{desktop: 'none', mobile: 'block'}} as="h1" size={{desktop: "3xl", mobile: '2xl'}} fontWeight="700" textAlign={{desktop: 'left', mobile: 'center'}}>
              Make remote work
            </Heading>
          </Box>
          <Flex w='100%' textAlign={{desktop: 'left', mobile: 'center'}}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Flex>
          <Flex w={{desktop: '100%'}} >
            <Button
              _hover={{
                bg: "neutral.almostWhite",
                outline: "2px solid",
                color: "neutral.almostBlack",
              }}
              color="neutral.almostWhite"
              bg="neutral.almostBlack"
              borderRadius="10px"
            >
              Learn more
            </Button>
          </Flex>
          <Flex gap="15px" w='100%' justify='space-evenly'>
            <Image
              src="client-databiz.svg"
              alt="client-databiz"
              objectFit="contain"
              w='20%'
            />
            <Image
              src="client-audiophile.svg"
              alt="client-audiophile"
              objectFit="contain"
              w='20%'
            />
            <Image
              src="client-meet.svg"
              alt="client-meet"
              objectFit="contain"
              w='20%'
            />
            <Image
              src="client-maker.svg"
              alt="client-maker"
              objectFit="contain"
              w='20%'
            />
          </Flex>
        </Flex>
        <Box w={{desktop: "50%", mobile: '100%'}} h={{mobile: '100%'}} >
          <Image
            src="image-hero-desktop.png"
            alt="image-hero-desktop"
            h="100%"
            display={{desktop: 'block', mobile:'none'}}
          />
          <Image
            src="image-hero-mobile.png"
            alt="image-hero-mobile"
            w='100%'
            display={{desktop: 'none', mobile:'block'}}
          />
        </Box>
      </Flex>

      <Flex align='center' justify='center' fontSize='sm' pt='25px'>
        Challenge by {' '}
        <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </Link>
        . Coded by <Link href="https://github.com/taufiqmahdi" target="_blank"> tm</Link>.
      </Flex>
    </>
  );
};

export default Home;
