import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Icon,
  Hide,
} from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
  const [isCompanyOpen, setIsCompanyOpen] = useState(true);
  // isOpen ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'

  return (
    <Flex p={{mobile: '10px'}} gap="15px" w="100%" >
      <Flex w="100%"  >
        <Image src="logo.svg" alt="logo" objectFit="contain" pr="25px" />

        

        <Hide below='desktop'>
        <Menu
          onOpen={() => {
            setIsFeaturesOpen(false);
          }}
          onClose={() => {
            setIsFeaturesOpen(true);
          }}
        >
          <MenuButton
            as={Button}
            flexDirection="row"
            bg="none"
            _hover={{ bg: "none" }}
          >
            <Flex align="center" gap="5px">
              Features
              <Image
                src={isFeaturesOpen ? "icon-arrow-down.svg" : "icon-arrow-up.svg"}
                h="100%"
              />
            </Flex>
          </MenuButton>
          <MenuList p="10px">
            <MenuItem>
              <Flex gap="5px" align="center">
                <Image src="icon-todo.svg" alt="icon-todo" />
                Todo List
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex gap="5px" align="center">
                <Image src="icon-calendar.svg" alt="icon-calendar" />
                Calendar
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex gap="5px" align="center">
                <Image src="icon-reminders.svg" alt="icon-reminders" />
                Reminders
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex gap="5px" align="center">
                <Image src="icon-planning.svg" alt="icon-planning" />
                Planning
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu
          onOpen={() => {
            setIsCompanyOpen(false);
          }}
          onClose={() => {
            setIsCompanyOpen(true);
          }}
        >
          <MenuButton
            as={Button}
            flexDirection="row"
            bg="none"
            _hover={{ bg: "none" }}
          >
            <Flex align="center" gap="5px">
              Company
              <Image src={isCompanyOpen ? "icon-arrow-down.svg" : "icon-arrow-up.svg"} h="100%" />
            </Flex>
          </MenuButton>
          <MenuList p="10px">
            <MenuItem>History</MenuItem>
            <MenuItem>Our Team</MenuItem>
            <MenuItem>Blog</MenuItem>
          </MenuList>
        </Menu>

        <Button bg="none" _hover={{}}>
          Careers
        </Button>
        <Button bg="none" _hover={{}}>
          About
        </Button>
        </Hide>
      </Flex>
      
      
      <Flex justify='right' w="100%">
      <Hide below='desktop'>
        <Button bg="none" _hover={{}}>
          Login
        </Button>
        <Button bg="none" _hover={{}} outline="2px solid">
          Register
        </Button>
      </Hide>
        <Show below='desktop'>
          <Image src='icon-menu.svg' objectFit='contain' />
        </Show>
      </Flex>
    </Flex>
  );
};

export default Navbar;
