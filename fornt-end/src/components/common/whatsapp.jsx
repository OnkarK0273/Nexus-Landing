import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    
    PopoverBody,
   
    PopoverArrow,
    PopoverCloseButton,
    
  } from '@chakra-ui/react'
  import { IoLogoWhatsapp } from "react-icons/io";
import WhatsappRipple from './WhatsappRipple';

const Whatsapp = () => {

    const href = 'https://wa.me/919673730404?text=Hello, I would like to know more about your projects.'

  return (
    <Box position={'fixed'}  bottom={'20px'} right={'20px'} zIndex={20} >
        
        <Popover placement='top' >
            <PopoverTrigger  >
                <Box  border={'0px'} borderColor={'teal'} >

            <WhatsappRipple/>
                </Box>
            </PopoverTrigger>
            <PopoverContent color='white' bg="#232222" borderColor='#232222'>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <VStack align={'flex-start'} gap={5} p={5}>
                        <Box>
                        <Image  src='/images/logos/chat.png'  width={'50px'} />
                        </Box>
                        <Box fontSize={'lg'} fontWeight={'bold'} >
                            <Text>Hi there!</Text>
                            <Text>how can i help you?</Text>
                        </Box>
                        <HStack bg={'black'} color={'white'} w={'180px'} p={2} borderRadius={5}  cursor={'pointer'} >
                            <IoLogoWhatsapp  size={'25px'} />
                            <Link _hover={{ color: "#FDCB00" }} href={href} isExternal >Chat with us</Link>
                        </HStack>
                    </VStack>
                    
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </Box>
  )
}

export default Whatsapp