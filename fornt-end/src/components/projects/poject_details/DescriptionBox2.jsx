import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Description from './Description'


const DescriptionBox2 = ({des1,des2}) => {
  return (
    <Box>
       
              <VStack  gap={'20px'}>
                <Description des={des1}  w={'100%'} />
                <Description des={des2}  w={'100%'} />
              </VStack>
              
        
    </Box>
  )
}

export default DescriptionBox2