import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Headier from '../home/Headier'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  const borderpicel = '0px'
  return (
    <Box bg={'#636363'}  py={10} >
      <Headier text={'Contact Us'} />
      <Stack direction={{base:"column",md:"row"}}  justifyContent={{base:"space-around",md:"space-between"}} w={"80%"} m={'auto'}  border={borderpicel} borderColor={'white'} h={{base:"220px",sm:"200",md:"250px",lg:"200px"}} >
        <Stack border={borderpicel} borderColor={'white'} gap={10} w={{base:"100%",md:'40%'}}  >
          
          <Box fontSize={'lg'} >
            Sayghar, Bhilar – Medha road, Near Panchgani, Mahabaleshwar, Maharashtra 415012
            </Box>
          <Stack border={borderpicel} borderColor={'white'} w={'100%'}  >
            <HStack  >
              <Box p={1} bg={'black'} borderRadius={'15px'} ><MdCall/></Box>
              <Box>+91 1234567890</Box>
            </HStack>
            <HStack>
              <Box p={1} bg={'black'} borderRadius={'15px'} >
                <IoIosMail/>
              </Box>
              <Box>
                nexus@gmail.con
              </Box>
            </HStack>
          </Stack>

        </Stack>
        <Stack  direction={'column'}  border={borderpicel} borderColor={'white'}  w={{base:"100%",md:'50%'}} justifyContent={'space-between'}  >
          <Box w={'80%'}  backgroundColor={'gray.700'} h={'180px'}  display={{base:"none",md:"block"}} >
            
          </Box>
          <Stack  w={{base:"100%",md:'100%',lg:"50%"}} justifyContent={'space-between'}  >
            <Stack  direction={'row'} gap={5} border={borderpicel} borderColor={'white'} justifyContent={'left'}  >
              <Box  p={1} bg={'black'} borderRadius={'15px'} >< IoLogoWhatsapp/></Box>
              <Box p={1} bg={'black'} borderRadius={'15px'} ><FaFacebook/></Box>
              <Box p={1} bg={'black'} borderRadius={'15px'}  > <AiFillInstagram/></Box>
            </Stack> 
          </Stack>
          
        </Stack>
      </Stack>
     
    </Box>
  )
}

export default Footer