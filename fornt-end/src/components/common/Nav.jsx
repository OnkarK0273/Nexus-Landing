
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
  
  } from '@chakra-ui/react';
  import { MdSell,MdOutlineMessage,MdHome } from 'react-icons/md'
  import { useNavigate } from 'react-router-dom'
  import { HamburgerIcon, CloseIcon, ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
  import {Link as Navlink} from 'react-router-dom'
  import React, { useState,useEffect } from 'react';
  
  
  
  
  export default function Navbar2() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()
        const btnRef = React.useRef()
      
    // handleside
    const handleSide = (val)=>{
      navigate(val)
      onClose()
    }
  
    
  
    return (
      <>
        <Box px={{base:5 ,md:28}} position='sticky' bg={'black'} top={'0'} zIndex='2' py={4}>
          <Flex  alignItems={'center'} justifyContent={'space-between'} >
            <IconButton
              size={'md'}
              ref={btnRef}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              bg={'black'}
              color={'white'}
              onClick={isOpen ? onClose : onOpen}
            />
  
            <HStack  alignItems={'center'} display={flag?{ base: 'none', md: 'flex' }:"flex"}    >
              <Box mr={{base:5,md:0}} border={'0px'} color={'white'} >
                  <Image height={{base:"40px",md:"80px"}} width={{base:"40px",md:"80px"}} src='/images/Nexus-Logo-02.png' objectFit={'fill'} onClick={()=>{navigate('/')}}  />
              </Box>            
            </HStack>
           
            <Flex alignItems={'center'}>
            <HStack
                as={'nav'}
                spacing={4}
                justifyContent='space-evenly'
                pr='15px'
                display={{ base: 'none', md: 'flex' }}>
                  <Box flexDirection={'column'} size='lg' p='10px' cursor={'pointer'} _hover={{ color:'#FDCB00' }} onClick={()=>{navigate('/sell')}} >
                      
                       <Text  fontWeight={'bold'}>Home</Text>
                  </Box>
                  <Box flexDirection={'column'} size='lg' p='10px' cursor={'pointer'}  >
                       
                       <Text  fontWeight={'bold'} _hover={{ color:'#FDCB00' }} >About</Text>
                  </Box>
                  <Box flexDirection={'column'} size='lg' p='10px' _hover={{ color:'#FDCB00' }}  cursor={'pointer'}>
                       
                       <Text  fontWeight={'bold'}>Projects</Text>
                  </Box>
                  <Box flexDirection={'column'} size='lg' p='10px' _hover={{ color:'#FDCB00' }}  cursor={'pointer'}>
                       
                       <Text  fontWeight={'bold'}>Contact US</Text>
                  </Box>
              </HStack>           
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerHeader textAlign={'center'}  >
                <Avatar
                    
                    size={'xl'}
                    src={
                        '/images/Nexus-Logo-02.png'
                    }
                />
                
            </DrawerHeader>
            <hr />
              <DrawerCloseButton />              
              <DrawerBody >
                  <VStack alignItems={'flex-start'} >
                      <Button w='100%'  size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}}  _hover={{ color:'teal' }} >
                          <Icon   as={MdHome} boxSize={5}  /> 
                          <Text  fontWeight={'bold'}>Home</Text>
                      </Button>
                      <Button w='100%' size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/sell')}} _hover={{ color:'teal' }} >
                          <Icon   as={MdSell} boxSize={5}  /> 
                          <Text  fontWeight={'bold'}>Sell</Text>
                      </Button>
                      <Button  w='100%'  size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}} _hover={{ color:'teal' }} >
                          <Icon  as={''} boxSize={5} /> 
                          <Text  fontWeight={'bold'}>Help</Text>
                      </Button>
                      <Button  w='100%' size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}} _hover={{ color:'teal' }}  >
                          <Icon   as={MdOutlineMessage} boxSize={5} /> 
                          <Text  fontWeight={'bold'}>Messages</Text>
                      </Button>
                  </VStack>  
              </DrawerBody>          
            </DrawerContent>
          </Drawer>
          ) : false}
        </Box>      
      </>
    );
  }