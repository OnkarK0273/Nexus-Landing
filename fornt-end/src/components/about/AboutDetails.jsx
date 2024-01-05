import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { aboutDetails } from '../../utils/Data'
import Upanimation from '../animation/Upanimation'
import Opacityanimation from '../animation/Opacityanimation'

const AboutDetails = () => {
  return (
    <Box  w={'80%'} m={'auto'}  position={'relative'} py={24}>
        <Opacityanimation>
          <Box w={'25%'}    position={'absolute'} bottom={'50px'} right={'-20px'}  opacity={'40%'} >
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

