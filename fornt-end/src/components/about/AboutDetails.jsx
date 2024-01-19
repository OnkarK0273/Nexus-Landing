import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { aboutDetails } from '../../utils/Data'
import Upanimation from '../animation/Upanimation'
import Opacityanimation from '../animation/Opacityanimation'

const AboutDetails = () => {
  return (
    <Box  w={'80%'} m={'auto'}  position={'relative'} py={{base:'20px',md:'30px'}}>
        <Opacityanimation>
          <Box w={{base:"25%",md:"10%"}}    position={'absolute'} bottom={'50px'} right={'-20px'}  opacity={'20%'} >
              <Image  src='/images/Nexus-Logo.png' alt='logo'/>
          </Box>
          </Opacityanimation>
        <Stack gap={10}  fontSize={{base:"md",md:'xl'}} >
            {
                aboutDetails?.map((el)=> <Upanimation><Text zIndex={2} >{el}</Text></Upanimation> )
            }
        </Stack>


    </Box>
  )
}

export default AboutDetails

