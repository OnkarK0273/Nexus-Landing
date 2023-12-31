import { Box, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { aboutDetails } from '../../utils/Data'

const AboutDetails = () => {
  return (
    <Box  w={'80%'} m={'auto'}  position={'relative'} py={24}>
        <Box w={'25%'}    position={'absolute'} bottom={'50px'} right={'-20px'}  opacity={'40%'} >
            <Image  src='/images/Nexus-Logo.png' alt='logo'/>
        </Box>
        <Stack gap={10}  fontSize={{base:"md",md:'xl'}} >
            {
                aboutDetails?.map((el)=><Text zIndex={2} >{el}</Text>)
            }
        </Stack>


    </Box>
  )
}

export default AboutDetails

