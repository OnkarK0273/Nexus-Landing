import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Headier from '../home/Headier'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { motion} from 'framer-motion'
const Footer = () => {
  const borderpicel = '0px'
  return (
    <Box bg={'#636363'}  py={10}  id='contact' >
      <Headier text={'Contact Us'} />
      <motion.div
                    initial={{opacity:0,y:80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:1}}
                    
        >
      <Stack direction={{base:"column",md:"row"}}  justifyContent={{base:"space-around",md:"space-between"}} w={"80%"} m={'auto'}  border={borderpicel} borderColor={'white'} h={{base:"230px",sm:"200px",md:"285px",lg:"270px",xl:"280px","2xl":"400px"}}  fontSize={{base:"md",md:"lg",lg:"xl",xl:"xl","2xl":"2xl"}} >
        <Stack border={borderpicel} borderColor={'white'} gap={10} w={{base:"100%",md:'40%'}}  >
          
          <Box  >
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
          <Stack  w={{base:"100%",md:'100%',lg:"50%"}} justifyContent={'space-between'}  >
            <Stack  direction={'row'} gap={5} border={borderpicel} borderColor={'white'} justifyContent={'left'}  >
              <Box  p={1} bg={'black'} borderRadius={'15px'} >< IoLogoWhatsapp/></Box>
              <Box p={1} bg={'black'} borderRadius={'15px'} ><FaFacebook/></Box>
              <Box p={1} bg={'black'} borderRadius={'15px'}  > <AiFillInstagram/></Box>
            </Stack> 
          </Stack>

        </Stack>
        <Stack  direction={'column'}  border={borderpicel} borderColor={'white'}  w={{base:"100%",md:'50%'}} justifyContent={'space-between'}  >
          <Box w={'90%'} h={{md:"280",lg:"270px",xl:"215px",xl:"250px","2xl":"390px"}} backgroundColor={'gray.700'} m={'auto'}   display={{base:"none",md:"block"}} >
            
          </Box>
                   
        </Stack>
      </Stack>
      </motion.div>
    </Box>
  )
}

export default Footer