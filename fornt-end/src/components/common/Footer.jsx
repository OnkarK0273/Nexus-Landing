import { AspectRatio, Box, HStack, Stack, Text, background } from '@chakra-ui/react'
import React from 'react'

import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { motion} from 'framer-motion'
const Footer = () => {
 
  const borderpicel = '0px'
  const boder1 = '0px'
  const boder2 = '0px'
  const iconSize = '25px'
  return (
    <Box bg={'#232222'}  py={{base:'20px',md:'30px'}}  id='contact' >
      
      <motion.div
                    initial={{opacity:0,y:80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:1}}
                    
        >
           <Stack direction={{base:"column",lg:"row"}}  justifyContent={{base:"space-around",md:"space-between"}} w={{base:"80%",md:"80%",lg:"70%","2xl":"57%"}} m={'auto'}  border={boder1} borderColor={'white'} gap={10}
            //  h={{base:"230px",sm:"200px",md:"285px",lg:"270px",xl:"280px","2xl":"400px"}}  
             fontSize={{base:"sm",md:"md"}}
              >
                
              <Stack border={boder2} borderColor={'white'} gap={10} w={{base:"100%",lg:'40%'}}  >
                
                <Text fontSize={{base:"md",md:"lg"}} fontWeight={'bold'} >
                506, A Wing, The Empire, Tarabai Park, Kolhapur-416003.
                  </Text>
                <Stack border={borderpicel} borderColor={'white'} w={'100%'}  >
                  <HStack gap={'15px'} >
                    <Box p={1} bg={'black'} borderRadius={'15px'} cursor={'pointer'}  _hover={{background:"#FDCB00"}} ><MdCall size={iconSize}/></Box>
                    <Text fontSize={{base:"md",md:"lg"}} fontWeight={'bold'} >+91 967 373 0404, +91 988 122 1175 </Text>
                  </HStack>
                  <HStack gap={'15px'} >
                    <Box p={1} bg={'black'} borderRadius={'15px'} >
                      <IoIosMail size={iconSize} />
                    </Box>
                    <Text fontSize={{base:"md",md:"lg"}} fontWeight={'bold'}>
                    Info@thenexusgroup.in
                    </Text >
                  </HStack>
                </Stack>
                <Stack  w={{base:"100%",md:'100%',lg:"50%"}} justifyContent={'space-between'}  >
                  <Stack  direction={'row'} gap={5} border={borderpicel} borderColor={'white'} justifyContent={'left'}  >
                    <Box  p={1} bg={'black'} borderRadius={'15px'} >< IoLogoWhatsapp size={iconSize} /></Box>
                    <Box p={1} bg={'black'} borderRadius={'15px'} ><FaFacebook size={iconSize} /></Box>
                    <Box p={1} bg={'black'} borderRadius={'15px'}  > <AiFillInstagram size={iconSize}/></Box>
                  </Stack> 
                </Stack>
      
              </Stack>
              <Stack  direction={'column'}  border={boder2} borderColor={'white'}  w={{base:"100%",md:'100%',lg:"50%"}} justifyContent={'space-between'}  >
                <Box w={'100%'} h={{md:"250",lg:"270px",xl:"215px",xl:"250px","2xl":"280px"}} backgroundColor={'gray.700'} m={{base:0,lg:'auto'}} borderRadius={'10px'}  display={{base:'block',md:"block",lg:'block'}} >
                <AspectRatio width={'100%'} height={'100%'}  >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.492229038112!2d74.2263074755176!3d16.702274084072748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100727b53dbfb%3A0x6e0692f7193b9ab7!2sempire%20tower%20ADV.%20NOTARY%20..DCRUZ!5e0!3m2!1sen!2sin!4v1704974572993!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{borderRadius:'10px'}}  ></iframe>
                
                </AspectRatio>
                
                </Box>
                         
              </Stack>       
      
            </Stack>
          
      
      
      </motion.div>
    </Box>
  )
}

export default Footer