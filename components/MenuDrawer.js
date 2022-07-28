import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Portal,
  Image,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";

const MenuDrawer = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();
  const [isOpen, setIsOpen] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <>
      {/* <Button 
      // ref={btnRef} 
      colorScheme="teal" onClick={() => setIsOpen(true)}>
        Open
      </Button> */}
      <Image
        ref={btnRef}
        src="icon-menu.svg"
        alt="icon-menu"
        objectFit="contain"
        onClick={() => setIsOpen(true)}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent fontSize="18px" fontFamily="Epilogue">
          <Flex justify="right" p="25px">
            <Image
              src="icon-close-menu.svg"
              alt="icon-close-menu"
              objectFit="contain"
              onClick={() => setIsOpen(false)}
            />
          </Flex>
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap="25px">
              <Flex
                gap="10px"
                onClick={() =>
                  setIsFeaturesOpen((prevIsFeaturesOpen) => !prevIsFeaturesOpen)
                }
              >
                Features
                <Image
                  src="icon-arrow-down.svg"
                  alt="icon-arrow-down"
                  objectFit="contain"
                  display={!isFeaturesOpen ? "block" : "none"}
                />
                <Image
                  src="icon-arrow-up.svg"
                  alt="icon-arrow-up"
                  objectFit="contain"
                  display={isFeaturesOpen ? "block" : "none"}
                />
              </Flex>

              <Flex
                direction="column"
                display={isFeaturesOpen ? "flex" : "none"}
                gap="25px"
                pl="25px"
              >
                <Flex gap="15px">
                  <Image
                    src="icon-todo.svg"
                    alt="icon-todo"
                    objectFit="contain"
                  />
                  Todo List
                </Flex>
                <Flex gap="15px">
                  <Image
                    src="icon-calendar.svg"
                    alt="icon-calendar"
                    objectFit="contain"
                  />
                  Calendar
                </Flex>
                <Flex gap="15px">
                  <Image
                    src="icon-reminders.svg"
                    alt="icon-reminders"
                    objectFit="contain"
                  />
                  Reminders
                </Flex>
                <Flex gap="15px">
                  <Image
                    src="icon-planning.svg"
                    alt="icon-planning"
                    objectFit="contain"
                  />
                  Planning
                </Flex>
              </Flex>

              <Flex
                gap="10px"
                onClick={() =>
                  setIsCompanyOpen((prevIsCompanyOpen) => !prevIsCompanyOpen)
                }
              >
                Company
                <Image
                  src="icon-arrow-down.svg"
                  alt="icon-arrow-down"
                  objectFit="contain"
                  display={!isCompanyOpen ? "block" : "none"}
                />
                <Image
                  src="icon-arrow-up.svg"
                  alt="icon-arrow-up"
                  objectFit="contain"
                  display={isCompanyOpen ? "block" : "none"}
                />
              </Flex>

              <Flex
                direction="column"
                display={isCompanyOpen ? "flex" : "none"}
                gap="25px"
                pl="25px"
              >
                <Flex gap="15px">History</Flex>
                <Flex gap="15px">Our Team</Flex>
                <Flex gap="15px">Blog</Flex>
              </Flex>

              <Flex>Careers</Flex>

              <Flex>About</Flex>

              <Flex justify="center">
                <Text>Login</Text>
              </Flex>

              <Flex justify="center">
                <Button
                  w="100%"
                  outline="2px solid"
                  bg="none"
                  _hover={{ bg: "none" }}
                  fontWeight="300"
                >
                  Register
                </Button>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
