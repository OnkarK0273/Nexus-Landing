import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Opacityanimation from '../../animation/Opacityanimation'
import { motion } from 'framer-motion'
const Poster = ({src,alt,istext}) => {
  return (
    <>
        
        <Opacityanimation>
            <Stack
            overflow={'hidden'}
            position={'relative'}
            justify={'center'}
            align={'center'}  
            w={'100%'} height={{base:"500px",sm:"600px",md:"600px",lg:"700px",xl:"1080px"}}  border={'0px'} borderColor={'white'} >
                <Image src={src} alt={alt} width={"100%"} height={'100%'} opacity={'0.7'} objectFit={{base:"cover",xl:"cover"}} />
                { istext && <motion.div
                    initial={{opacity:0,y:-40}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:1}}
                    style={{position:"absolute" }}>
                  <Heading  fontSize={{base:"30px",md:"80px",lg:'100px'}} color={'#FDCB00'}>Dr. Dongare Park</Heading>
                </motion.div> }
            </Stack>
        </Opacityanimation>
    </>
  )
}

export default Poster