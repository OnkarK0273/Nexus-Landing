import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Text,
  Icon,
  Image,
  VStack,
  InputGroup,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { MdSell, MdOutlineMessage, MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { Link as Navlink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { FaExclamationCircle } from "react-icons/fa";
import ScrollNav from "./Scroll";

export default function Navbar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const btnRef = React.useRef();

  // handleside
  const handleSide = (val) => {
    navigate(val);
    onClose();
  };

  const Closesidebar = ()=>{
    onClose();
  }

  return (
    <>
      <Box
        px={{ base: 5, md: 28 }}
        position="sticky"
        bg={"rgba(0, 0, 0, 0.8)"}
        top={"0"}
        zIndex="2"
        py={4}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            ref={btnRef}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            bg={"black"}
            color={"white"}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            alignItems={"center"}
            display={flag ? { base: "none", md: "flex" } : "flex"}
          >
            <Box mr={{ base: 5, md: 0 }} border={"0px"} color={"white"}>
              <Image
                height={{ base: "40px", md: "80px" }}
                width={{ base: "40px", md: "80px" }}
                src="/images/Nexus-Logo-02.png"
                objectFit={"fill"}
                onClick={() => {
                  navigate("/");
                }}
              />
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={{ base: 5, lg: 10 }}
              justifyContent="space-evenly"
              pr="15px"
              display={{ base: "none", md: "flex" }}
            >
              <Box
                flexDirection={"column"}
                fontSize={{ base: "md", lg: "xl" }}
                p="10px"
                cursor={"pointer"}
                _hover={{ color: "#FDCB00" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <Text fontWeight={"light"}>Home</Text>
              </Box>
              <Box
                flexDirection={"column"}
                fontSize={{ base: "md", lg: "xl" }}
                p="10px"
                cursor={"pointer"}
                onClick={() => {
                  handleSide("/about");
                }}
              >
                <Text fontWeight={"light"} _hover={{ color: "#FDCB00" }}>
                  About
                </Text>
              </Box>
              <Box
                flexDirection={"column"}
                fontSize={{ base: "md", lg: "xl" }}
                p="10px"
                _hover={{ color: "#FDCB00" }}
                cursor={"pointer"}
              >
                <ScrollNav name={"Projects"}>
                  <Text fontWeight={"light"}>Projects</Text>
                </ScrollNav>
              </Box>
              <Box
                flexDirection={"column"}
                fontSize={{ base: "md", lg: "xl" }}
                p="10px"
                _hover={{ color: "#FDCB00" }}
                cursor={"pointer"}
              >
                <ScrollNav name={"contact"}>
                  <Text fontWeight={"light"}>Contact US</Text>
                </ScrollNav>
              </Box>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg={"black"}>
              <DrawerHeader textAlign={"center"} w={"40%"} m={"auto"}>
                <Image src="/images/Nexus-Logo-02.png" alt="drawer-img" />
              </DrawerHeader>
              <hr />
              <DrawerCloseButton />
              <DrawerBody>
                <Stack alignItems={"center"} gap={8} color={"white"}>
                  <HStack
                    w="100%"
                    size="lg"
                    p="10px"
                    columnGap={"10px"}
                    onClick={() => {
                      handleSide("/");
                    }}
                    _hover={{ color: "#FDCB00" }}
                    cursor={"pointer"}
                  >
                    <Icon as={MdHome} boxSize={5} />
                    <Text fontWeight={"bold"}>Home</Text>
                  </HStack>
                  <HStack
                    w="100%"
                    size="lg"
                    p="10px"
                    columnGap={"10px"}
                    onClick={() => {
                      handleSide("/about");
                    }}
                    _hover={{ color: "#FDCB00" }}
                    cursor={"pointer"}
                  >
                    <Icon as={FaExclamationCircle} boxSize={5} />
                    <Text fontWeight={"bold"}>About</Text>
                  </HStack>
                  <HStack
                    w="100%"
                    size="lg"
                    p="10px"
                    columnGap={"10px"}
                    _hover={{ color: "#FDCB00" }}
                    cursor={"pointer"}
                  
                  >
                    <Icon as={IoGrid} boxSize={5} />
                    <ScrollNav name={"Projects"}>
                      <Text onClick={()=>{Closesidebar()}} fontWeight={"bold"}>Projects</Text>
                    </ScrollNav>
                  </HStack>
                  <HStack
                    w="100%"
                    size="lg"
                    p="10px"
                    columnGap={"10px"}
                    _hover={{ color: "#FDCB00" }}
                    cursor={"pointer"}
                    
                  >
                    <Icon as={MdPermContactCalendar} boxSize={5} />
                    <ScrollNav name={"contact"}  >
                      <Text onClick={()=>{Closesidebar()}}  fontWeight={"bold"}>Contact US</Text>
                    </ScrollNav>
                  </HStack>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        ) : (
          false
        )}
      </Box>
    </>
  );
}
