import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
const FrontBanner = () => {
  return (
    <Box>
        <Stack
        overflow={'hidden'}
        position={'relative'}
        justify={'center'}
        align={'center'}  >
            <Image src='https://res.cloudinary.com/dzvja514w/image/upload/v1705856711/NexusGroup.com/about/CAM_3_1_oathz8.png' alt='about' height={{base:"450px",md:"600px",lg:'700px',xl:"720px","2xl":"877px"}} width={'100%'} objectFit={'cover'} />
            <motion.div
                    initial={{opacity:0,y:-40}}
                    transition={{duration:"0.5"}}
                    whileInView={{ opacity: 1 ,y:1}}
                    style={{position:"absolute" }}
                    viewport={{ once: true }}
                    
                >
            <Heading  fontSize={{base:"40px",md:"80px",lg:'120px'}} color={'#FDCB00'}>About us</Heading>
            </motion.div>
        </Stack>
    </Box>
  )
}

export default FrontBanner