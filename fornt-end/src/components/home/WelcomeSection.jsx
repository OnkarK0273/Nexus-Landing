import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import Welcome1 from '../animation/Welcome1'
import Welcome2 from '../animation/Welcome2'

const WelcomeSection = () => {
    const navigate = useNavigate()
    const scrollRef = useRef(null)

   
      
    // handleside
    const handleSide = (val)=>{
      navigate(val)
      
    }


  


  return (
    <Box  backgroundColor={"white"}   >
        <Box height={{base:"500px",md:"500px",lg:"700px",xl:"740px","2xl":"900px",}} w={'100%'} >
            <Image src='/images/welcome.png' width={'100%'} height={'100%'}  objectFit={'cover'} />
        </Box>
        <AnimatePresence>        
            <Stack h={{base:"150px",md:"200px",lg:'220px'}}  justifyContent={"center"} align={"center"} flexDir={"column"} pb={10} pt={5} >
                <motion.div
                    initial={{opacity:0,x:80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,x:15}}
                    
                >
                    <Stack direction={"row"}  color={"#556258"}  justify={"center"} align={'center'}  gap={'40px'}  >
                        <Welcome1  />
                        <Welcome2  />
                    </Stack>
                </motion.div>
                <motion.div
                    initial={{opacity:0,y:-80}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:0}}
                    
                >
                <Box  >   
                <Button mt={5} p={"10px"} w={{base:"120px",md:'180px'}} fontSize={{base:"md",md:"xl",lg:"2xl"}} fontWeight={"bold"} color={'#FDCB00'} backgroundColor={'black'} onClick={()=>handleSide("/contact")} >
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