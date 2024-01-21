

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useBoolean,
  AspectRatio,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import Headier from './Headier'
import { useState } from 'react'

export default function Contact() {
  const [flag, setFlag] = useBoolean()
  return (
    <Container bg="black" maxW="full" mt={0} centerContent overflow="hidden"  py={{base:'20px',md:'30px'}} >
      <Headier text={'Contact Us'} />
      
      <Flex  >
        <Box
          bg="#232222"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>

            {
              flag && <WrapItem>
              <Box  >
                <Heading size={'md'} >Fill up the form below to contact</Heading>
                
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems='flex-start' border={'0px'} borderColor={'teal'}   >
                    <Button
                      size="md"
                      height="48px"
                      border={'0px'} borderColor={'teal'}
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdPhone color="#FDCB00" size="20px" />}>
                      +91-988888888
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdEmail color="#FDCB00" size="20px" />}>
                      hello@abc.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      
                      
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdLocationOn color="#FDCB00" size="20px" />}>
                      506, A Wing, The Empire, Tarabai Park, Kolhapur-416003.
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start">
                  <IconButton
                    aria-label="facebook"
                    bg='#FDCB00'
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'teal' }}
                    icon={<MdFacebook size="28px" />}
                  />
                  <IconButton
                    aria-label="github"
                    bg='#FDCB00'
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'teal' }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="discord"
                    bg='#FDCB00'
                    size="lg"
                    isRound={true}
                    _hover={{ bg: 'teal' }}
                    icon={<BsDiscord size="28px" />}
                  />
                </HStack>
              </Box>
          </WrapItem>
            }
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#FDCB00" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
          {
          flag && <AspectRatio width={'100%'} height={'300px'} m={'auto'} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.492229038112!2d74.2263074755176!3d16.702274084072748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100727b53dbfb%3A0x6e0692f7193b9ab7!2sempire%20tower%20ADV.%20NOTARY%20..DCRUZ!5e0!3m2!1sen!2sin!4v1704974572993!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius:'10px'}}  ></iframe>
          
          </AspectRatio>
        }
        </Box>
        
      </Flex>
      
    </Container>
  )
}