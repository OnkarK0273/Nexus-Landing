import { Box, Button, Heading,  Stack, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import Welcome1 from '../animation/Welcome1'
import Welcome2 from '../animation/Welcome2'
import { mobilevideoSrc, webvideoSrc } from '../../utils/Data'
import {isMobile} from 'react-device-detect'

const WelcomeSection = () => {
    const navigate = useNavigate()
    const [toggle,setToggle] =useState(false)
    

   
    
    // handleside
    const handleSide = (val)=>{
      navigate(val)
      
    }

    console.log(isMobile)

  


  return (
    <Box  backgroundColor={"white"}   >
        <Stack
        position={'relative'}
        justify={'center'}
        align={'center'}
        w={'100%'} objectFit={'cover'} >
            {/* <video   autoPlay loop muted width={'100%'} height={'1350px'}>
               {
                toggle?<source src={webvideoSrc} type="video/mp4"/>:<source src={mobilevideoSrc} type="video/mp4"/>
               } 
                    Your browser does not support the video tag.
            </video> */}
            {isMobile ? (
              // Render mobile video for smaller screens
              <video autoPlay loop muted width={'100%'} height={'1350px'}>
                <source src={mobilevideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // Render web video for larger screens
              <video autoPlay loop muted width={'100%'} height={'1350px'}>
                <source src={webvideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            
            
              
            
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
              align={"center"} flexDir={"column"} border={'0px'} borderColor={'teal'}  gap={'40px'} py={{base:'20px',md:'30px'}} >
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
                    <Button  p={"5px"}  fontSize={'md'} w={'120px'} fontWeight={"bold"} color={'#FDCB00'} backgroundColor={'black'} onClick={()=>handleSide("/about")} _hover={{bg:"#FDCB00",color:"black"}} >
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