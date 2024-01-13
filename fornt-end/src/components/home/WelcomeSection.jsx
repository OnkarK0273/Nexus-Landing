import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import Welcome1 from '../animation/Welcome1'
import Welcome2 from '../animation/Welcome2'

const WelcomeSection = () => {
    const navigate = useNavigate()
    const scrollRef = useRef(null)
    const videoSrc = 'https://res.cloudinary.com/dzvja514w/video/upload/v1704957964/nexus_home_poynpu.mp4';
   
      
    // handleside
    const handleSide = (val)=>{
      navigate(val)
      
    }


  


  return (
    <Box  backgroundColor={"white"}   >
        <Stack
        position={'relative'}
        justify={'center'}
        align={'center'}
        p={0}
        
        //  height={{base:"600px",md:"500px",lg:"700px",xl:"740px","2xl":"900px",}}
        height={{base:"180px",md:"430px",lg:"570px",xl:"810px","2xl":"1440px",}}
          w={'100%'} objectFit={'contain'} >
            {/* <Image src='/images/welcome.png' width={'100%'} height={'100%'}  objectFit={'cover'} /> */}
            <video height={'500px'} autoPlay loop muted width={'100%'} >
                <source src={videoSrc} type="video/mp4"  />
                    Your browser does not support the video tag.
            </video>
            <motion.div
                    initial={{opacity:0,y:-40}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:1}}
                    style={{position:"absolute" }}
                    
                >
            <Heading  fontSize={{base:"40px",md:"80px",lg:'140px'}} color={'#FDCB00'}    >Welcome</Heading>
                </motion.div>
        </Stack>
        <AnimatePresence>        
            <Stack h={{base:"175px",md:"240px",lg:'220px'}}  justifyContent={'space-evenly'} align={"center"} flexDir={"column"} border={'0px'} borderColor={'teal'} p={5}  >
                <motion.div
                    initial={{opacity:0,x:80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,x:40}}
                    
                >
                    <Stack direction={"row"}  color={'black'}  justify={"center"} align={'center'}  gap={'80px'} border={'0px'} borderColor={'teal'} >
                        <Welcome1  />
                        <Welcome2  />
                    </Stack>
                </motion.div>
                <motion.div
                    initial={{opacity:0,y:-80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:0}}
                    
                >
                <Box border={'0px'} borderColor={'teal'} >   
                <Button mt={5} p={"5px"}  fontSize={{base:"md",md:"md",lg:"md"}} fontWeight={"bold"} color={'#FDCB00'} backgroundColor={'black'} onClick={()=>handleSide("/contact")} >
                        Know More
                </Button>  
                </Box>
                </motion.div>
            </Stack>
        </AnimatePresence>
    </Box>
  )
}

export default WelcomeSection