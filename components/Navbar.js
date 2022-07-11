import { Button, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex gap="15px" w="100%">
      <Flex w="100%" >
        <Image src="logo.svg" alt="logo" objectFit="contain" pr='25px' />
        <Button bg="none" _hover="none">
          Features
          <Image ml="5px" src="icon-arrow-down.svg" />
        </Button>
        <Button bg="none" _hover="none">
          Company
          <Image ml="5px" src="icon-arrow-down.svg" />
        </Button>
        <Button bg="none" _hover="none">
          Careers
        </Button>
        <Button bg="none" _hover="none">
          About
        </Button>
      </Flex>
      <Flex justify="right" w="100%">
        <Button bg="none" _hover="none">
          Login
        </Button>
        <Button bg="none" _hover="none" outline='2px solid'>
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
