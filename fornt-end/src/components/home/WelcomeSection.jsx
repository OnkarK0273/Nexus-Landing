import { Box, Button, Heading,  Stack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import Welcome1 from '../animation/Welcome1'
import Welcome2 from '../animation/Welcome2'

const WelcomeSection = () => {
    const navigate = useNavigate()
   
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
        mt={2}
        
        //  height={{base:"600px",md:"500px",lg:"700px",xl:"740px","2xl":"900px",}}
        // height={{base:"220px",md:"430px",lg:"570px",xl:"810px","2xl":"1440px",}}
          w={'100%'} objectFit={'cover'} >
            {/* <Image src='/images/welcome.png' width={'100%'} height={'100%'}  objectFit={'cover'} /> */}
            <video   autoPlay loop muted width={'100%'} height={'500'}>
                <source src={videoSrc}   type="video/mp4"  />
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
            <Stack 
            // h={{base:"175px",md:"240px",lg:'220px'}} 
             display={{base:"none",md:"flex"}}
              align={"center"} flexDir={"column"} border={'0px'} borderColor={'teal'}  gap={'40px'} py={'20px'} >
                <motion.div
                    initial={{opacity:0,x:50}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,x:1}}
                    
                >
                    <Stack direction={"row"}  color={'black'}  align={'center'}  w={{md:"600px",lg:"900px",xl:'1000px','2xl':"1200px"}}  gap={'80px'} border={'0px'} borderColor={'teal'} >
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
                <Button  p={"5px"}  fontSize={'md'} w={'120px'} fontWeight={"bold"} color={'#FDCB00'} backgroundColor={'black'} onClick={()=>handleSide("/contact")} >
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