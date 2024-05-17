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
  CloseIcon
} from "@chakra-ui/icons";

import React, { useState, useEffect } from "react";

import ScrollNav from "./Scroll";
import MenuComponent from "./Manu";

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
        
        position='fixed'
        bg={"rgba(0, 0, 0, 0.8)"}
        top={"0"}
        zIndex="20"
        py={4}
        width={'100%'}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"} width={{base:'80%',"2xl":"1326px"}} m={'auto'} >  
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
            <Box mr={{ base: 5, md: 0 }} border={"0px"} color={"white"} cursor={'pointer'} >
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

          <Flex alignItems={"center"} border={'0px'} borderColor={'white'}   >
            <HStack
              as={"nav"}
              spacing={{ base: 5, lg: 10 }}
              justifyContent="space-evenly"
              pr="0px"
              display={{ base: "none", md: "flex" }}
            >
              
              <Box
                flexDirection={"column"}
                
                p="10px"
                cursor={"pointer"}
                onClick={() => {
                  handleSide("/about");
                }}
              >
                <Text fontWeight={"light"} _hover={{ color: "#FDCB00" }} fontSize={{base:'16px',lg:'18px'}} >
                  ABOUT
                </Text>
              </Box>
              <Box
                flexDirection={"column"}
                fontSize={{base:'16px',lg:'18px'}}
                p="10px"
                _hover={{ color: "#FDCB00" }}
                cursor={"pointer"}
              >
                {/* <ScrollNav name={"Projects"}> */}
                  {/* <Text fontWeight={"light"}>Projects</Text> */}
                  <MenuComponent color={'black'} handleSide={handleSide} />
                {/* </ScrollNav> */}
              </Box>
              <Box
                flexDirection={"column"}
                fontSize={{base:'16px',lg:'18px'}}
                p="10px"
                _hover={{ color: "#FDCB00" }}
                cursor={"pointer"}
                onClick={() => {
                  handleSide("/Contact");
                }}
                
              >
                
                  <Text fontWeight={"light"}  >CONTACT US</Text>
                
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
              <DrawerHeader textAlign={"center"} w={"35%"} m={"auto"}>
                <Image src="/images/Nexus-Logo-02.png" alt="drawer-img"   />
              </DrawerHeader>
              <hr />
              <DrawerCloseButton />
              <DrawerBody>
                <Stack alignItems={"center"} gap={'5px'} color={"white"}  >
                  
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
                    
                    <Text >ABOUT</Text>
                  </HStack>

                 <Box height={'1px'}  border={'1px'} borderColor={'#3f3f3f'} w={'100%'} ></Box>
                  
                  <HStack
                    w="100%"
                    size="lg"
                    p="10px"
                   
                    columnGap={"10px"}
                    _hover={{ color: "#FDCB00" }}
                    cursor={"pointer"}
                  
                  >
                    
                    <MenuComponent color={'#232222'}  handleSide={handleSide}/>
                  </HStack>

                  <Box height={'1px'}  border={'1px'} borderColor={'#3f3f3f'} w={'100%'} ></Box>

                  <HStack
                    w="100%"
                    size="lg"
                    p="10px"
                   
                    columnGap={"10px"}
                    _hover={{ color: "#FDCB00" }}
                    cursor={"pointer"}
                    
                  >
                    
                    <ScrollNav name={"contact"}  >
                      <Text onClick={()=>{Closesidebar()}}  >CONTACT US</Text>
                    </ScrollNav>
                  </HStack>
                  <Box height={'1px'}  border={'1px'} borderColor={'#3f3f3f'} w={'100%'} ></Box>
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
